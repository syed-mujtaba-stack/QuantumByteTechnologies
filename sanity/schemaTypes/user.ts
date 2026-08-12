import { defineType, defineField } from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'passwordHash',
      title: 'Password Hash',
      type: 'string',
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: 'address',
      title: 'Shipping Address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City / Region',
      type: 'string',
    }),
    defineField({
      name: 'isAdmin',
      title: 'Administrator',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'role',
      title: 'User Role',
      description: 'Customers cannot access the admin dashboard. Set to "Super Admin" to grant admin access.',
      type: 'string',
      initialValue: 'customer',
      options: {
        list: [
          { title: 'Customer', value: 'customer' },
          { title: 'Staff', value: 'staff' },
          { title: 'Super Admin', value: 'super admin' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'createdAt',
      title: 'Member Since',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'lastLoginAt',
      title: 'Last Login',
      type: 'datetime',
    }),
  ],
})