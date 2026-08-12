import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { itService } from './itService'
import { order } from './order'
import { user } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, itService, order, user],
}

