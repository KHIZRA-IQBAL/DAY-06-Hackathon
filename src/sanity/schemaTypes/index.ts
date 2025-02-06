import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './category'
import { product } from './product'
import { userSchema } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,product,userSchema],
}
