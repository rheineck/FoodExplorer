const knex = require('../database')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(req, res) {
    const { dishes_name, quantity } = req.body

    const dishes = await knex('dishes').where('name', dishes_name).select('id')
    console.log(dishes)
    console.log(quantity)

    return res.json()
  }
}

module.exports = OrdersController