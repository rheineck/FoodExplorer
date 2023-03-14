const knex = require('../database')

class UserRepository {
  async findByEmail(email) {
    const user = await knex('users').select().where({email})

    return user
  }

  async findById(user_id) {
    const user = await knex('users').select().where({ id: user_id })

    return user
  }

  async create({ name, email, password, isAdmin }) {
    const userId = await knex('users').insert({
      name,
      email,
      password,
      isAdmin
    })

    return { id: userId }
  }

  async update({ user_id, name, email, old_password, password }) {
    
  }

}

module.exports = UserRepository