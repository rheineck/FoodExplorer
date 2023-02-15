const { Router } = require('express')

const dishesRoutes = Router()

const DishesController = require('../controllers/DishesController')

const dishesController = new DishesController()

dishesRoutes.post('/', dishesController.create)
dishesRoutes.put('/:id',dishesController.update)
dishesRoutes.get('/:id', dishesController.show)
dishesRoutes.delete('/:id', dishesController.delete)
dishesRoutes.get('/', dishesController.index)

module.exports = dishesRoutes