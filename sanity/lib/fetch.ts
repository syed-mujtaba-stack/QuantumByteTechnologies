import { client } from './client'
import {
  ALL_PRODUCTS_QUERY,
  ALL_IT_SERVICES_QUERY,
  ALL_ORDERS_QUERY,
  ALL_CATEGORIES_QUERY,
  ALL_USERS_QUERY,
  ALL_COUPONS_QUERY,
  ALL_REVIEWS_QUERY,
  ALL_VENDORS_QUERY,
  SITE_SETTINGS_QUERY,
} from './queries'
import { Product, ITService, INITIAL_PRODUCTS, INITIAL_IT_SERVICES } from './data'

export interface OrderItem {
  productId: string
  name: string
  brand: string
  quantity: number
  unitPrice: number
  lineTotal: number
}

export interface Order {
  _id: string
  orderId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: string
  city: string
  paymentMethod: string
  totalAmount: number
  status: string
  createdAt: string
  items: OrderItem[]
}

export interface AdminCategory {
  _id: string
  title: string
  slug: string
  icon: string
  description: string
}

export interface AdminUser {
  _id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  isAdmin: boolean
  role: 'customer' | 'staff' | 'super admin'
  createdAt: string
  lastLoginAt: string
}

export interface AdminCoupon {
  _id: string
  code: string
  discountType: string
  discountValue: number
  active: boolean
  usageCount: number
  createdAt: string
}

export interface AdminReview {
  _id: string
  authorName: string
  productName: string
  productId: string
  rating: number
  comment: string
  status: string
  createdAt: string
}

export interface AdminVendor {
  _id: string
  name: string
  contactEmail: string
  phone: string
  specialty: string
  status: string
  createdAt: string
}

export interface SiteSettings {
  _id: string
  storeName: string
  supportEmail: string
  supportPhone: string
  address: string
  announcement: string
  announcementEnabled: boolean
  freeShippingThreshold: number
}

/**
 * Fetch all products from Sanity.
 * Falls back to INITIAL_PRODUCTS if Sanity returns no data.
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const results = await client.fetch<Product[]>(ALL_PRODUCTS_QUERY, {}, { next: { revalidate: 60 } })
    if (results && results.length > 0) {
      return results
    }
    // Fallback to static seed data if Sanity is empty
    return INITIAL_PRODUCTS
  } catch (err) {
    console.warn('[fetchProducts] Sanity fetch failed, using static fallback:', err)
    return INITIAL_PRODUCTS
  }
}

/**
 * Fetch all IT services from Sanity.
 * Falls back to INITIAL_IT_SERVICES if Sanity returns no data.
 */
export async function fetchITServices(): Promise<ITService[]> {
  try {
    const results = await client.fetch<ITService[]>(ALL_IT_SERVICES_QUERY, {}, { next: { revalidate: 60 } })
    if (results && results.length > 0) {
      return results
    }
    return INITIAL_IT_SERVICES
  } catch (err) {
    console.warn('[fetchITServices] Sanity fetch failed, using static fallback:', err)
    return INITIAL_IT_SERVICES
  }
}

/**
 * Fetch all orders from Sanity.
 * Falls back to an empty list if Sanity returns no data.
 */
export async function fetchOrders(): Promise<Order[]> {
  try {
    const results = await client.fetch<Order[]>(ALL_ORDERS_QUERY, {}, { next: { revalidate: 30 } })
    return results || []
  } catch (err) {
    console.warn('[fetchOrders] Sanity fetch failed:', err)
    return []
  }
}

/**
 * Fetch all categories from Sanity.
 * Falls back to an empty list if Sanity returns no data.
 */
export async function fetchCategories(): Promise<AdminCategory[]> {
  try {
    const results = await client.fetch<AdminCategory[]>(ALL_CATEGORIES_QUERY, {}, { next: { revalidate: 30 } })
    return results || []
  } catch (err) {
    console.warn('[fetchCategories] Sanity fetch failed:', err)
    return []
  }
}

/**
 * Fetch all registered users from Sanity.
 */
export async function fetchUsers(): Promise<AdminUser[]> {
  try {
    const results = await client.fetch<AdminUser[]>(ALL_USERS_QUERY, {}, { next: { revalidate: 30 } })
    return results || []
  } catch (err) {
    console.warn('[fetchUsers] Sanity fetch failed:', err)
    return []
  }
}

/**
 * Fetch all coupons from Sanity.
 */
export async function fetchCoupons(): Promise<AdminCoupon[]> {
  try {
    const results = await client.fetch<AdminCoupon[]>(ALL_COUPONS_QUERY, {}, { next: { revalidate: 30 } })
    return results || []
  } catch (err) {
    console.warn('[fetchCoupons] Sanity fetch failed:', err)
    return []
  }
}

/**
 * Fetch all reviews from Sanity.
 */
export async function fetchReviews(): Promise<AdminReview[]> {
  try {
    const results = await client.fetch<AdminReview[]>(ALL_REVIEWS_QUERY, {}, { next: { revalidate: 30 } })
    return results || []
  } catch (err) {
    console.warn('[fetchReviews] Sanity fetch failed:', err)
    return []
  }
}

/**
 * Fetch all vendors from Sanity.
 */
export async function fetchVendors(): Promise<AdminVendor[]> {
  try {
    const results = await client.fetch<AdminVendor[]>(ALL_VENDORS_QUERY, {}, { next: { revalidate: 30 } })
    return results || []
  } catch (err) {
    console.warn('[fetchVendors] Sanity fetch failed:', err)
    return []
  }
}

/**
 * Fetch site settings singleton from Sanity.
 */
export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  try {
    const results = await client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 30 } })
    return results || null
  } catch (err) {
    console.warn('[fetchSiteSettings] Sanity fetch failed:', err)
    return null
  }
}
