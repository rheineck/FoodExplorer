  const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')
const knex = require('../database/index')

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

  async update(req, res) {
    const { name, email, old_password, password } = req.body
    const user_id = req.user.id

    const [user] = await knex('users').select().where({ id: user_id })

    if(!user) {
      throw new AppError('Usuário não encontrado!')
    }

    const [userWithUpdatedEmail] = await knex('users').select().where({ id: user_id })

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('Este e-mail já está em uso!')
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(password && !old_password) {
      throw new AppError('Senha antiga não informada!')
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)
      
      if(!checkOldPassword) {
        throw new AppError('Senha antiga não confere!')
      }

      user.password = await hash(password, 8)
    }

    await knex('users').where({ id: user_id }).update({
      name,
      email,
      password: user.password
    })

    
    return res.status(200).json()

  }

}

module.exports = UsersController