const Router = require('express')

const paymentsRoutes = Router()

const PaymentsController = require('../controllers/PaymentsController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const paymentsController = new PaymentsController()

paymentsRoutes.post('/', ensureAuthenticated, paymentsController.create)
paymentsRoutes.delete('/', ensureAuthenticated, paymentsController.delete)
paymentsRoutes.get('/', ensureAuthenticated, paymentsController.index)
paymentsRoutes.get('/cards/:id', ensureAuthenticated, paymentsController.show)

module.exports = paymentsRoutes