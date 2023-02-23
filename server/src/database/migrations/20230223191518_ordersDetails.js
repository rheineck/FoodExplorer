exports.up = knex => knex.schema.createTable('details', table => {
  table.increments('id')
  table.integer('order_id').references('id').inTable('orders')
  table.text('dish')
  table.integer('quantity')
})

exports.down = knex => knex.schema.dropTable('details')