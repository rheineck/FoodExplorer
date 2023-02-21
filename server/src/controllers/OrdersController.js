const knex = require('../database')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(req, res) {
    const { id, quantity } = req.body

    if(id.length !== quantity.length) {
      throw new AppError('Quantidade de pratos inconsistente! Verifique!')
    }

    const dishes = await knex('dishes').select('name', 'price')
    console.log(dishes)
    // let dishes = []

    // for(let i = 0; i < dishes_name.length; i++) {
    //   dishes[i] = await knex('dishes').select('id', 'name', 'price').where({ name: dishes_name[i] })
    // }
    
    // let order = []

    // for(let i = 0; i < dishes_name.length; i++) {
    //   order[i] = [dishes_name[i], quantity[i]]
    // }

    return res.json(dishes)
  }
}

module.exports = OrdersController