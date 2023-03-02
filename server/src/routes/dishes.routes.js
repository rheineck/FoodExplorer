const { Router } = require('express')

const dishesRoutes = Router()

const DishesController = require('../controllers/DishesController')
const ensureAdmin = require('../middleware/ensureAdmin')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const dishesController = new DishesController()

dishesRoutes.post('/', ensureAuthenticated, dishesController.create)
dishesRoutes.put('/:id', dishesController.update)
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.show)
dishesRoutes.delete('/:id', dishesController.delete)
dishesRoutes.get('/', ensureAuthenticated, dishesController.index)

module.exports = dishesRoutes