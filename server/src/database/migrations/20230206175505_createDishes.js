exports.up = knex => knex.schema.createTable('dishes', table => {
  table.increments('id')
  table.text('name')
  table.text('category')
  table.text('description')
  table.float('price')
  table.text('photo')
})

exports.down = knex => knex.schema.dropTable('dishes')
