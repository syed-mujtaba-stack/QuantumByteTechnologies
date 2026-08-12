import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'storeName',
      title: 'Store Name',
      type: 'string',
    }),
    defineField({
      name: 'supportEmail',
      title: 'Support Email',
      type: 'string',
    }),
    defineField({
      name: 'supportPhone',
      title: 'Support Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
    }),
    defineField({
      name: 'announcement',
      title: 'Announcement Bar Message',
      type: 'string',
    }),
    defineField({
      name: 'announcementEnabled',
      title: 'Show Announcement',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'freeShippingThreshold',
      title: 'Free Shipping Above (Base Price)',
      type: 'number',
    }),
  ],
})