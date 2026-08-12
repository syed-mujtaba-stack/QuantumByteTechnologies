import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { itService } from './itService'
import { order } from './order'
import { user } from './user'
import { coupon } from './coupon'
import { review } from './review'
import { vendor } from './vendor'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, itService, order, user, coupon, review, vendor, siteSettings],
}

