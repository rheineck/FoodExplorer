const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')
const knex = require('../database/knex/index')

class UsersController {
  async create(req, res) {
    const { name, email, password, isAdmin } = req.body

    const [checkUserExists] = await knex('users').select().where({email})

    if (checkUserExists) {
      throw new AppError('Este email já está em uso!')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword,
      isAdmin
    })

    return res.status(201).json()
  
  }

}

module.exports = UsersController