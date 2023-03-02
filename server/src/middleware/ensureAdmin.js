const knex = require('../database')
const AppError = require('../utils/AppError')

async function ensureAdmin(req, res, next) {
  const admin = await knex('users').select('isAdmin')
  console.log(admin)
  const isAdmin = "1"

  if(admin[0].isAdmin != isAdmin) {
    throw new AppError('Você não é um Admin!')
  }
  return next()
}

module.exports = ensureAdmin