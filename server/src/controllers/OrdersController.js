const knex = require('../database')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(req, res) {
    const { dishes_id, quantity, user_id } = req.query
    const { status } = req.body
    let i
    
    const dishesId = dishes_id.split(',')
    const dishesQuantity = quantity.split(',')

    if(dishesId.length !== dishesQuantity.length) {
      throw new AppError('Quantidade de pratos inconsistente! Verifique!')
    }

    let dishes = []
    let price = []
    let total = 0

    for(i = 0; i < dishesId.length; i++) {
      [price[i]] = await knex('dishes').where({ id: dishesId[i] }).select('price');
      [dishes[i]] = await knex('dishes').where({ id: dishesId[i] }).select('name')
    }

    for (i = 0; i < dishesId.length; i++) {
      total = total + price[i].price*dishesQuantity[i]
    }

    total = total.toFixed(2)
    
    for (i = 0; i < dishesId.length; i++) {
      await knex('orders').insert({
        dishes_id: dishesId[i],
        quantity: dishesQuantity[i],
        user_id,
        total,
        status
      })
    }
      
    return res.json()
  }

  async show(req,res) {
    
  }
}

module.exports = OrdersController