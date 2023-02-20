const Router = require('express')

const ordersRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const OrdersController = require('../controllers/OrdersController')

const orderController = new OrdersController()

ordersRoutes.post('/', ensureAuthenticated, orderController.create)

module.exports = ordersRoutes