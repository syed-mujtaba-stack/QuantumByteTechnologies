import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'brand',
      title: 'Brand / Manufacturer',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Computers', value: 'computers' },
          { title: 'Laptops', value: 'laptops' },
          { title: 'Mobiles', value: 'mobiles' },
          { title: 'Chargers', value: 'chargers' },
          { title: 'Parts & Components', value: 'parts' },
          { title: 'Monitors & Displays', value: 'monitors' },
          { title: 'Gaming Accessories', value: 'accessories' },
          { title: 'Networking & Storage', value: 'networking' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price ($ / PKR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'discountPrice',
      title: 'Original / Scratch Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Local Fallback Image Path',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 4.8,
    }),
    defineField({
      name: 'reviewsCount',
      title: 'Reviews Count',
      type: 'number',
      initialValue: 34,
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 15,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isNewRelease',
      title: 'New Arrival',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'specs',
      title: 'Key Specifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
