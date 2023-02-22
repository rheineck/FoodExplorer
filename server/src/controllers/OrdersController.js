const knex = require('../database')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(req, res) {
    const { id, quantity, user_id } = req.query
    const { status } = req.body
    let i

    const dishes_id = id.split(',')
    const dishesQuantity = quantity.split(',')

    if(dishes_id.length !== dishesQuantity.length) {
      throw new AppError('Quantidade de pratos inconsistente! Verifique!')
    }

    let dishes = []
    let price = []
    let total = 0

    for(i = 0; i < dishes_id.length; i++) {
      [price[i]] = await knex('dishes').where({ id: dishes_id[i] }).select('price');
      [dishes[i]] = await knex('dishes').where({ id: dishes_id[i] }).select('name')
    }

    for (i = 0; i < dishes_id.length; i++) {
      total = total + price[i].price
    }

    total = total.toFixed(2)
    
    await knex('orders').insert({
      user_id,
      dishes_id,
      quantity: dishesQuantity,
      total,
      status
    })
    
       
    return res.json()
  }
}

module.exports = OrdersController