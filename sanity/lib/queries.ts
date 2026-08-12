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
