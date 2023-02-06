import { tableSchema } from '@nozbe/watermelondb'

export const pacientSchema = tableSchema({
  name: 'pacients',
  columns: [
    {
      name: 'pacient_id',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
    // {
    //   name: 'birth_day',
    //   type: 'string',
    // },
    // {
    //   name: 'responsible',
    //   type: 'string',
    // },
    // {
    //   name: 'profession',
    //   type: 'string',
    // },
    // {
    //   name: 'medication',
    //   type: 'string',
    // },
    // {
    //   name: 'create_at',
    //   type: 'number',
    // },
  ],
})
