import { client } from './client'
import { ALL_PRODUCTS_QUERY, ALL_IT_SERVICES_QUERY, ALL_ORDERS_QUERY } from './queries'
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
