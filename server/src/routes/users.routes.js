const { Router } = require('express')

const usersRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const ensureAdmin = require('../middleware/ensureAdmin')
const UsersController = require('../controllers/UsersController')

const userController = new UsersController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticated, userController.update)

module.exports = usersRoutes