const Router = require('express')

const ordersRoutes = Router()

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const OrdersController = require('../controllers/OrdersController')

const orderController = new OrdersController()

ordersRoutes.post('/', orderController.create)
ordersRoutes.get('/:id', ensureAuthenticated, orderController.show)
ordersRoutes.put('/', orderController.update)
ordersRoutes.get('/', orderController.index)

module.exports = ordersRoutes