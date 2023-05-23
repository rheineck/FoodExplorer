const { Router } = require('express')

const favoritesRoutes = Router()

const FavoritesController = require('../controllers/FavoritesController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const favoritesController = new FavoritesController()

favoritesRoutes.post('/:dishes_id', ensureAuthenticated, favoritesController.create)
favoritesRoutes.delete('/:dishes_id', ensureAuthenticated, favoritesController.delete)
favoritesRoutes.get('/', ensureAuthenticated, favoritesController.index)

module.exports = favoritesRoutes