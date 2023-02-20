const { Router } = require('express')

const usersRoutes = require('./users.routes')
const dishesRoutes = require('./dishes.routes')
const sessionRoutes = require('./sessions.routes')
const ingredientsRoutes = require('./ingredients.routes')
const favoritesRoutes = require('./favorites.routes')
const ordersRoutes = require('./orders.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/dishes', dishesRoutes)
routes.use('/sessions', sessionRoutes)
routes.use('/ingredients', ingredientsRoutes)
routes.use('/favorites', favoritesRoutes)
routes.use('/orders', ordersRoutes)

module.exports = routes