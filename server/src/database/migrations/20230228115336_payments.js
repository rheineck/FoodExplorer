exports.up = knex => knex.schema.createTable('payments', table => {
  table.increments('id')
  table.integer('user_id').references('id').inTable('users')
  table.text('number')
  table.text('flag')
  table.text('type')
  table.text('security_code')
  table.text('name')
  table.text('expires')
})

exports.down = knex => knex.schema.dropTable('payments')