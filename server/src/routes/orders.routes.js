const Router = require('express')

const ordersRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const ensureAdmin = require('../middleware/ensureAdmin')
const OrdersController = require('../controllers/OrdersController')

const orderController = new OrdersController()

ordersRoutes.post('/', ensureAuthenticated, orderController.create)
ordersRoutes.get('/', ensureAuthenticated, orderController.show)
ordersRoutes.put('/', orderController.update)
ordersRoutes.get('/', ensureAuthenticated, orderController.index)

module.exports = ordersRoutes