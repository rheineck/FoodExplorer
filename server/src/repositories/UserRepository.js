const knex = require('../database')

class UserRepository {
  async findByEmail(email) {
    const user = await knex('users').select().where({email})
    
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

}

module.exports = UserRepository