exports.up = knex => knex.schema.createTable('dishes', table => {
  table.increments('id')
  table.text('name').notNullable()
  table.text('category').notNullable()
  table.text('description').notNullable()
  table.decimal('price', 10,2).notNullable()
  table.text('picture')
  table.timestamp('updated_at').default(knex.fn.now())
  table.timestamp('created_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('dishes')
