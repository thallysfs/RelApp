import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schemas } from './schema'
import { Pacient } from './model/Pacient'

const adapter = new SQLiteAdapter({
  schema: schemas,
})

export const database = new Database({
  adapter,
  modelClasses: [Pacient],
  actionsEnabled: true,
})
