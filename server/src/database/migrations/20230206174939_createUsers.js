exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('name')
  table.text('email')
  table.text('password')
  table.timestamp('created_at').default(knex.fn.now())
  table.integer('isAdmin')
})

exports.down = knex => knex.schema.dropTable('users')
