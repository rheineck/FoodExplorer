exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments('id')
  table.integer('user_id').references('id').inTable('users')
  table.integer('dishes_id').references('id').inTable('dishes')
  table.integer('quantity')
  table.float('total')
  table.text('status')
  table.timestamp('created_at').default(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('orders')
