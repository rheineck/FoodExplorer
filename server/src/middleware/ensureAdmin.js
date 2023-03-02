const knex = require('../database')
const AppError = require('../utils/AppError')

async function ensureAdmin(req, res, next) {
  const admin = await knex('users').select('isAdmin')
  const isAdmin = "1"
  if(admin !== isAdmin) {
    throw new AppError('Você não é um Admin!')
  }
  return next()
}

module.exports = ensureAdmin