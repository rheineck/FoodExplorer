const { Router } = require('express')

const ingredientsRoutes = Router()

const IngredientsController = require('../controllers/IngredientsController')
const ensureAdmin = require('../middleware/ensureAdmin')

const ingredientsController = new IngredientsController()

ingredientsRoutes.get('/', ensureAdmin, ingredientsController.index)
ingredientsRoutes.delete('/:id', ensureAdmin, ingredientsController.delete)

module.exports = ingredientsRoutes