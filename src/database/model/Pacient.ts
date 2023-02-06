import { Model } from '@nozbe/watermelondb'
import { field, date, readonly } from '@nozbe/watermelondb/decorators'

export class Pacient extends Model {
  static table = 'pacients'

  @field('pacient_id') pacientId

  @field('name') name

  // @field('birth_day') birthDay

  // @field('responsible') responsible

  // @field('profession') profession

  // @field('medication') medication

  // @readonly @date('created_at') createdAt
}
