const { Router } = require('express')

const dishesRoutes = Router()

const DishesController = require('../controllers/DishesController')
const ensureAdmin = require('../middleware/ensureAdmin')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const dishesController = new DishesController()

dishesRoutes.post('/', ensureAdmin, dishesController.create)
dishesRoutes.put('/:id', ensureAdmin, dishesController.update)
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.show)
dishesRoutes.delete('/:id', ensureAdmin, dishesController.delete)
dishesRoutes.get('/', ensureAuthenticated, dishesController.index)

module.exports = dishesRoutes