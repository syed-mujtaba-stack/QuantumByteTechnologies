import { defineType, defineField } from 'sanity'

export const vendor = defineType({
  name: 'vendor',
  title: 'Vendor / Supplier',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Vendor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Active', 'Inactive'],
      },
      initialValue: 'Active',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})