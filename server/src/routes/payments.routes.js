const Router = require('express')

const paymentsRoutes = Router()

const PaymentsController = require('../controllers/PaymentsController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const paymentsController = new PaymentsController()

paymentsRoutes.post('/:user_id', ensureAuthenticated, paymentsController.create)
paymentsRoutes.delete('/:user_id', ensureAuthenticated, paymentsController.delete)
paymentsRoutes.get('/:user_id', ensureAuthenticated, paymentsController.index)
paymentsRoutes.get('/cards/:id', ensureAuthenticated, paymentsController.show)

module.exports = paymentsRoutes