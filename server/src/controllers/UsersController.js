const { hash } = require('bcryptjs')
const sqliteConnection = require('../database/sqlite')
const AppError = require('../utils/AppError')
const knex = require('../database')

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    // const database = await sqliteConnection()
    // const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    const checkUserExists = await knex('users').select('*').where(email)

    if (checkUserExists) {
      throw new AppError('Este email já está em uso!')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword
    })

    return response.status(201).json()
  }

}

module.exports = UsersController