const { Router } = require('express')

const ingredientsRoutes = Router()

const IngredientsController = require('../controllers/IngredientsController')
const ensureAdmin = require('../middleware/ensureAdmin')

const ingredientsController = new IngredientsController()

ingredientsRoutes.get('/', ingredientsController.index)
ingredientsRoutes.delete('/:id', ingredientsController.delete)

module.exports = ingredientsRoutes