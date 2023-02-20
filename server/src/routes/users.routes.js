const { Router } = require('express')

const usersRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const UsersController = require('../controllers/UsersController')

const userController = new UsersController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/:id', ensureAuthenticated, userController.update)

module.exports = usersRoutes