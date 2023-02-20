const { Router } = require('express')

const favoritesRoutes = Router()

const FavoritesController = require('../controllers/FavoritesController')

const favoritesController = new FavoritesController()

favoritesRoutes.post('/:user_id/:dishes_id', favoritesController.create)
favoritesRoutes.delete('/:user_id/:dishes_id', favoritesController.delete)
favoritesRoutes.get('/:user_id', favoritesController.index)

module.exports = favoritesRoutes