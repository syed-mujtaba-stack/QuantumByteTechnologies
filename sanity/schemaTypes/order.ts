import { defineType, defineField } from 'sanity'

export const order = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
    }),
    defineField({
      name: 'customerPhone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'text',
    }),
    defineField({
      name: 'city',
      title: 'City / Region',
      type: 'string',
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
    }),
    defineField({
      name: 'items',
      title: 'Order Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'orderItem',
          title: 'Item',
          fields: [
            { name: 'productId', title: 'Product ID', type: 'string' },
            { name: 'name', title: 'Product Name', type: 'string' },
            { name: 'brand', title: 'Brand', type: 'string' },
            { name: 'quantity', title: 'Quantity', type: 'number' },
            { name: 'unitPrice', title: 'Unit Price', type: 'number' },
            { name: 'lineTotal', title: 'Line Total', type: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      },
      initialValue: 'Pending',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
