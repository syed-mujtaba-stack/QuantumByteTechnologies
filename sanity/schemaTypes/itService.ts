import { defineType, defineField } from 'sanity'

export const itService = defineType({
  name: 'itService',
  title: 'IT Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'string',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image Path',
      type: 'string',
    }),
    defineField({
      name: 'priceStarting',
      title: 'Starting Price ($ / PKR)',
      type: 'number',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'popularBadge',
      title: 'Popular Badge',
      type: 'boolean',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
