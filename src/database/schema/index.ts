import { appSchema } from '@nozbe/watermelondb'

import { pacientSchema } from './PacientSchema'

export const schemas = appSchema({
  version: 1,
  tables: [pacientSchema],
})
