const { verify } = require('jsonwebtoken')
const AppError = require('../utils/AppError')
const AuthConfig = require('../configs/auth')

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization

  if(!authHeader) {
    throw new AppError('JSON Web Token not informed!', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, AuthConfig.jwt.secret)
    req.user = {
      id: Number(user_id)
    }

    return next()
  } catch {
    throw new AppError('JSON Web Token invalid!', 401)
  }
}

module.exports = ensureAuthenticated