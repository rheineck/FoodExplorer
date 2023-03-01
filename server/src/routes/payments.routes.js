const Router = require('express')

const paymentsRoutes = Router()

const PaymentsController = require('../controllers/PaymentsController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const paymentsController = new PaymentsController()

paymentsRoutes.post('/:user_id', paymentsController.create)
paymentsRoutes.delete('/:user_id', paymentsController.delete)
paymentsRoutes.get('/:user_id', paymentsController.index)
paymentsRoutes.get('/cards/:id', paymentsController.show)

module.exports = paymentsRoutes