import { groq } from 'next-sanity'

// Fetch all products (with optional category filter)
export const ALL_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(isFeatured desc, _createdAt desc) {
    _id,
    name,
    "id": _id,
    brand,
    category,
    price,
    discountPrice,
    "imageUrl": coalesce(imageUrl, "/images/computers/quantumbyte_custom_rig.jpg"),
    rating,
    reviewsCount,
    stock,
    isFeatured,
    isNewRelease,
    description,
    specs
  }
`

// Fetch all IT services
export const ALL_IT_SERVICES_QUERY = groq`
  *[_type == "itService"] | order(_createdAt asc) {
    _id,
    "id": _id,
    title,
    subtitle,
    "imageUrl": coalesce(imageUrl, "/images/services/custom_pc_building.jpg"),
    priceStarting,
    features,
    popularBadge,
    description
  }
`

// Fetch all orders (newest first)
export const ALL_ORDERS_QUERY = groq`
  *[_type == "order"] | order(createdAt desc) {
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

// Fetch all categories
export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    icon,
    description
  }
`

// Fetch all users (newest first), excluding password hashes
export const ALL_USERS_QUERY = groq`
  *[_type == "user"] | order(_createdAt desc) {
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

// Fetch all coupons
export const ALL_COUPONS_QUERY = groq`
  *[_type == "coupon"] | order(_createdAt desc) {
    _id,
    code,
    discountType,
    discountValue,
    active,
    usageCount,
    createdAt
  }
`

// Fetch all reviews
export const ALL_REVIEWS_QUERY = groq`
  *[_type == "review"] | order(_createdAt desc) {
    _id,
    authorName,
    productName,
    productId,
    rating,
    comment,
    status,
    createdAt
  }
`

// Fetch all vendors
export const ALL_VENDORS_QUERY = groq`
  *[_type == "vendor"] | order(_createdAt asc) {
    _id,
    name,
    contactEmail,
    phone,
    specialty,
    status,
    createdAt
  }
`

// Fetch site settings singleton
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    _id,
    storeName,
    supportEmail,
    supportPhone,
    address,
    announcement,
    announcementEnabled,
    freeShippingThreshold
  }
`
