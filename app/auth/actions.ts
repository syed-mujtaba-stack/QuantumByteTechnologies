'use server';

import crypto from 'crypto';
import { cookies } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/writeClient';
import type { OrderItem } from '@/sanity/lib/fetch';

const SESSION_COOKIE = 'qb_session';
const SESSION_DAYS = 7;

export interface PublicUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  isAdmin: boolean;
  role: 'customer' | 'staff' | 'super admin';
  createdAt: string;
  lastLoginAt: string;
}

export interface AuthResult {
  ok: boolean;
  error?: string;
  user?: PublicUser;
}

function sessionSecret(): string {
  return process.env.AUTH_SECRET || process.env.SANITY_API_WRITE_TOKEN || 'quantumbyte-dev-session-secret';
}

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split(':');
  if (parts.length !== 2) return false;
  const [salt, hash] = parts;
  const candidate = crypto.scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, 'hex');
  return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected);
}

function signSession(email: string): string {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = `${email}.${exp}`;
  const sig = crypto.createHmac('sha256', sessionSecret()).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

function verifySession(token: string | undefined): string | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [email, expStr, sig] = parts;
  const expected = crypto.createHmac('sha256', sessionSecret()).update(`${email}.${expStr}`).digest('hex');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  if (Number(expStr) < Date.now()) return null;
  return email;
}

function toPublicUser(doc: any): PublicUser {
  const role = ['customer', 'staff', 'super admin'].includes(doc.role) ? doc.role : 'customer';
  return {
    _id: doc._id,
    name: doc.name,
    email: doc.email,
    phone: doc.phone || '',
    address: doc.address || '',
    city: doc.city || '',
    isAdmin: role === 'super admin' || !!doc.isAdmin,
    role,
    createdAt: doc.createdAt || '',
    lastLoginAt: doc.lastLoginAt || '',
  };
}

async function setSession(email: string) {
  const store = await cookies();
  store.set(SESSION_COOKIE, signSession(email), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
}

async function clearSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

async function getSessionEmail(): Promise<string | null> {
  const store = await cookies();
  return verifySession(store.get(SESSION_COOKIE)?.value);
}

const USER_BY_EMAIL_QUERY = groq`
  *[_type == "user" && email == $email][0] {
    _id,
    name,
    email,
    phone,
    address,
    city,
    isAdmin,
    role,
    createdAt,
    lastLoginAt
  }
`

const MY_ORDERS_QUERY = groq`
  *[_type == "order" && customerEmail == $email] | order(createdAt desc) {
    _id,
    orderId,
    customerName,
    customerEmail,
    customerPhone,
    shippingAddress,
    city,
    paymentMethod,
    totalAmount,
    status,
    createdAt,
    items[] {
      productId,
      name,
      brand,
      quantity,
      unitPrice,
      lineTotal
    }
  }
`

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function registerUser(input: {
  name: string;
  email: string;
  phone: string;
  password: string;
}): Promise<AuthResult> {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const phone = input.phone.trim();
  const password = input.password;

  if (!name || !email || !phone || !password) {
    return { ok: false, error: 'All fields are required.' };
  }
  if (!validateEmail(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (password.length < 6) {
    return { ok: false, error: 'Password must be at least 6 characters long.' };
  }

  try {
    const existing = await client.fetch<{ _id: string } | null>(
      `*[_type == "user" && email == $email][0] { _id }`,
      { email }
    );
    if (existing) {
      return { ok: false, error: 'An account with this email already exists. Please sign in.' };
    }

    const doc = await writeClient.create({
      _type: 'user',
      name,
      email,
      phone,
      passwordHash: hashPassword(password),
      isAdmin: false,
      role: 'customer',
      createdAt: new Date().toISOString(),
    });

    await setSession(email);

    const fresh = await client.fetch<PublicUser>(USER_BY_EMAIL_QUERY, { email });
    return { ok: true, user: fresh ?? toPublicUser({ _id: doc._id, name, email, phone }) };
  } catch (err) {
    console.error('[registerUser] Failed:', err);
    return { ok: false, error: 'Registration failed. Please try again.' };
  }
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<AuthResult> {
  const email = input.email.trim().toLowerCase();
  const password = input.password;

  if (!email || !password) {
    return { ok: false, error: 'Email and password are required.' };
  }

  try {
    const user = await client.fetch<{ _id: string; passwordHash: string } | null>(
      `*[_type == "user" && email == $email][0] { _id, passwordHash }`,
      { email }
    );

    if (!user || !verifyPassword(password, user.passwordHash)) {
      return { ok: false, error: 'Invalid email or password.' };
    }

    await writeClient.patch(user._id).set({ lastLoginAt: new Date().toISOString() }).commit();
    await setSession(email);

    const fresh = await client.fetch<PublicUser>(USER_BY_EMAIL_QUERY, { email });
    if (!fresh) {
      return { ok: false, error: 'Account not found.' };
    }
    return { ok: true, user: fresh };
  } catch (err) {
    console.error('[loginUser] Failed:', err);
    return { ok: false, error: 'Login failed. Please try again.' };
  }
}

export async function logoutUser(): Promise<{ ok: boolean }> {
  await clearSession();
  return { ok: true };
}

export async function getCurrentUser(): Promise<{ user: PublicUser | null }> {
  const email = await getSessionEmail();
  if (!email) return { user: null };

  try {
    const user = await client.fetch<PublicUser | null>(USER_BY_EMAIL_QUERY, { email });
    return { user: user ?? null };
  } catch (err) {
    console.error('[getCurrentUser] Failed:', err);
    return { user: null };
  }
}

export async function updateProfile(input: {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}): Promise<AuthResult> {
  const email = await getSessionEmail();
  if (!email) return { ok: false, error: 'You must be signed in.' };

  const name = input.name.trim();
  const phone = input.phone.trim();
  const address = input.address.trim();
  const city = input.city.trim();
  if (!name) return { ok: false, error: 'Full name is required.' };

  try {
    const current = await client.fetch<{ _id: string } | null>(
      `*[_type == "user" && email == $email][0] { _id }`,
      { email }
    );
    if (!current) return { ok: false, error: 'Account not found. Please sign in again.' };

    await writeClient.patch(current._id).set({ name, phone, address, city }).commit();

    const fresh = await client.fetch<PublicUser>(USER_BY_EMAIL_QUERY, { email });
    return { ok: true, user: fresh ?? undefined };
  } catch (err) {
    console.error('[updateProfile] Failed:', err);
    return { ok: false, error: 'Could not save profile. Please try again.' };
  }
}

export async function changePassword(input: {
  currentPassword: string;
  newPassword: string;
}): Promise<{ ok: boolean; error?: string }> {
  const email = await getSessionEmail();
  if (!email) return { ok: false, error: 'You must be signed in.' };

  if (!input.newPassword || input.newPassword.length < 6) {
    return { ok: false, error: 'New password must be at least 6 characters long.' };
  }

  try {
    const user = await client.fetch<{ _id: string; passwordHash: string } | null>(
      `*[_type == "user" && email == $email][0] { _id, passwordHash }`,
      { email }
    );
    if (!user) return { ok: false, error: 'Account not found.' };
    if (!verifyPassword(input.currentPassword, user.passwordHash)) {
      return { ok: false, error: 'Current password is incorrect.' };
    }

    await writeClient.patch(user._id).set({ passwordHash: hashPassword(input.newPassword) }).commit();
    return { ok: true };
  } catch (err) {
    console.error('[changePassword] Failed:', err);
    return { ok: false, error: 'Could not change password. Please try again.' };
  }
}

export interface MyOrder {
  _id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  city: string;
  paymentMethod: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}

export async function getMyOrders(): Promise<{ orders: MyOrder[] }> {
  const email = await getSessionEmail();
  if (!email) return { orders: [] };

  try {
    const orders = await client.fetch<MyOrder[]>(MY_ORDERS_QUERY, { email }, { next: { revalidate: 10 } });
    return { orders: orders || [] };
  } catch (err) {
    console.error('[getMyOrders] Failed:', err);
    return { orders: [] };
  }
}

export async function getMyOrderById(orderId: string): Promise<{ order: MyOrder | null }> {
  const email = await getSessionEmail();
  if (!email) return { order: null };

  try {
    const order = await client.fetch<MyOrder | null>(
      `*[_type == "order" && orderId == $orderId && customerEmail == $email][0] {
        _id,
        orderId,
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
        city,
        paymentMethod,
        totalAmount,
        status,
        createdAt,
        items[] {
          productId,
          name,
          brand,
          quantity,
          unitPrice,
          lineTotal
        }
      }`,
      { orderId, email }
    );
    return { order: order ?? null };
  } catch (err) {
    console.error('[getMyOrderById] Failed:', err);
    return { order: null };
  }
}