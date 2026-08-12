'use server';

import { revalidatePath } from 'next/cache';
import { writeClient } from '@/sanity/lib/writeClient';

export interface AdminResult {
  ok: boolean;
  id?: string;
  error?: string;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 96);
}

async function run<T>(fn: () => Promise<T>, paths: string[]): Promise<AdminResult> {
  try {
    await fn();
    paths.forEach((p) => revalidatePath(p));
    return { ok: true };
  } catch (err) {
    console.error('[admin action] Failed:', err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// ---------- Products ----------

export interface ProductInput {
  name: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  stock?: number;
  rating?: number;
  reviewsCount?: number;
  isFeatured?: boolean;
  isNewRelease?: boolean;
  description?: string;
  imageUrl?: string;
  specs?: string[];
}

export async function adminCreateProduct(input: ProductInput): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.create({
        _type: 'product',
        name: input.name,
        slug: { _type: 'slug', current: slugify(input.name) },
        brand: input.brand,
        category: input.category,
        price: Number(input.price) || 0,
        discountPrice: input.discountPrice ? Number(input.discountPrice) : undefined,
        stock: input.stock ?? 15,
        rating: input.rating ?? 4.8,
        reviewsCount: input.reviewsCount ?? 0,
        isFeatured: input.isFeatured ?? false,
        isNewRelease: true,
        description: input.description || '',
        imageUrl: input.imageUrl || '',
        specs: input.specs || [],
      });
    },
    ['/admin', '/admin/products', '/shop', '/']
  );
}

export async function adminUpdateProduct(id: string, input: ProductInput): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.patch(id).set({
        name: input.name,
        brand: input.brand,
        category: input.category,
        price: Number(input.price) || 0,
        discountPrice: input.discountPrice ? Number(input.discountPrice) : 0,
        stock: input.stock ?? 15,
        rating: input.rating ?? 4.8,
        reviewsCount: input.reviewsCount ?? 0,
        isFeatured: input.isFeatured ?? false,
        isNewRelease: input.isNewRelease ?? true,
        description: input.description || '',
        imageUrl: input.imageUrl || '',
        specs: input.specs || [],
      }).commit();
    },
    ['/admin', '/admin/products', '/shop', '/']
  );
}

export async function adminDeleteProduct(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin', '/admin/products', '/shop', '/']
  );
}

// ---------- Categories ----------

export interface CategoryInput {
  title: string;
  slug?: string;
  icon?: string;
  description?: string;
}

export async function adminCreateCategory(input: CategoryInput): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.create({
        _type: 'category',
        title: input.title,
        slug: { _type: 'slug', current: input.slug || slugify(input.title) },
        icon: input.icon || '',
        description: input.description || '',
      });
    },
    ['/admin', '/admin/categories']
  );
}

export async function adminDeleteCategory(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin', '/admin/categories']
  );
}

// ---------- Orders ----------

export async function adminUpdateOrderStatus(id: string, status: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.patch(id).set({ status }).commit();
    },
    ['/admin', '/admin/orders']
  );
}

export async function adminDeleteOrder(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin', '/admin/orders']
  );
}

// ---------- Users ----------

export async function adminSetUserAdmin(id: string, isAdmin: boolean): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.patch(id).set({ isAdmin }).commit();
    },
    ['/admin/users', '/admin/customers']
  );
}

export async function adminUpdateUserRole(
  id: string,
  role: 'customer' | 'staff' | 'super admin'
): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.patch(id).set({ role, isAdmin: role === 'super admin' }).commit();
    },
    ['/admin/users', '/admin/customers']
  );
}

export async function adminDeleteUser(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin/users', '/admin/customers']
  );
}

// ---------- Coupons ----------

export interface CouponInput {
  code: string;
  discountType: string;
  discountValue: number;
  active: boolean;
}

export async function adminCreateCoupon(input: CouponInput): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.create({
        _type: 'coupon',
        code: input.code.toUpperCase().trim(),
        discountType: input.discountType,
        discountValue: Number(input.discountValue) || 0,
        active: input.active,
        usageCount: 0,
        createdAt: new Date().toISOString(),
      });
    },
    ['/admin', '/admin/coupons']
  );
}

export async function adminDeleteCoupon(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin', '/admin/coupons']
  );
}

// ---------- Reviews ----------

export async function adminModerateReview(id: string, status: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.patch(id).set({ status }).commit();
    },
    ['/admin/reviews']
  );
}

export async function adminDeleteReview(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin/reviews']
  );
}

// ---------- Vendors ----------

export interface VendorInput {
  name: string;
  contactEmail: string;
  phone: string;
  specialty: string;
  status: string;
}

export async function adminCreateVendor(input: VendorInput): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.create({
        _type: 'vendor',
        name: input.name,
        contactEmail: input.contactEmail,
        phone: input.phone,
        specialty: input.specialty,
        status: input.status || 'Active',
        createdAt: new Date().toISOString(),
      });
    },
    ['/admin/vendors']
  );
}

export async function adminDeleteVendor(id: string): Promise<AdminResult> {
  return run(
    async () => {
      await writeClient.delete(id);
    },
    ['/admin/vendors']
  );
}

// ---------- Site Settings ----------

export interface SettingsInput {
  storeName: string;
  supportEmail: string;
  supportPhone: string;
  address: string;
  announcement: string;
  announcementEnabled: boolean;
  freeShippingThreshold: number;
}

export async function adminSaveSettings(input: SettingsInput): Promise<AdminResult> {
  return run(
    async () => {
      const existing = await writeClient.fetch<{ _id: string } | null>(
        `*[_type == "siteSettings"][0] { _id }`
      );
      if (existing) {
        await writeClient.patch(existing._id).set(input).commit();
      } else {
        await writeClient.create({ _type: 'siteSettings', ...input });
      }
    },
    ['/admin/settings']
  );
}