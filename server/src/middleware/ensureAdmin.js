const knex = require('../database')
const AppError = require('../utils/AppError')

async function ensureAdmin(req, res, next) {
   const isAdmin = await knex('users').select('isAdmin')

   if(!isAdmin) {
    throw new AppError('Você não é um Admin!')
   }
    return next()
}

module.exports = ensureAdmin