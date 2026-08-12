import { defineType, defineField } from 'sanity'

export const coupon = defineType({
  name: 'coupon',
  title: 'Coupon / Promo Code',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Promo Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discountType',
      title: 'Discount Type',
      type: 'string',
      options: {
        list: [
          { title: 'Percentage', value: 'percentage' },
          { title: 'Fixed Amount', value: 'fixed' },
          { title: 'Free Shipping', value: 'freeshipping' },
        ],
      },
      initialValue: 'percentage',
    }),
    defineField({
      name: 'discountValue',
      title: 'Discount Value (Number or %)',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'usageCount',
      title: 'Usage Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})