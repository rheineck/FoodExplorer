const knex = require('../database')
const AppError = require('../utils/AppError')

class OrdersController {
  async create(req, res) {
    const { user_id, order, status } = req.body
    let i

    let quantity = []
    let dishes = []

    for (i = 0; i < order.length; i++) {
      quantity[i] = order[i][0]
      dishes[i] = order[i][1]
    }

    let dishName = []
    let dishPrice = []
    let total = 0

    for (i = 0; i < dishes.length; i++) {
      [dishName[i]] = await knex('dishes').select('name').where({ name: dishes[i] });
      [dishPrice[i]] = await knex('dishes').select('price').where({ name: dishes[i] });
      total = total + quantity[i] * dishPrice[i].price
    }

    total = total.toFixed(2)

    await knex('orders').insert({
      user_id,
      total,
      status
    })

    const order_id = await knex('orders').select('id').where({ user_id })

    const lastUserOrder = order_id[order_id.length - 1].id

    for (i = 0; i < dishName.length; i++) {
      await knex('details').insert({
        order_id: lastUserOrder,
        user_id,
        dish: dishName[i].name,
        quantity: quantity[i]
      })
    }

    return res.status(201).json()
  }

  async show(req, res) {
    const { id } = req.params

    const orders = await knex('orders').select('id', 'total', 'created_at').where('user_id', id)
    const lastOrderId = orders[orders.length - 1].id

    const details = await knex('details').select().where('user_id', id)
    const ordersDetails = details.filter(detail => detail.order_id === lastOrderId)
   
    return res.json({
      ...ordersDetails,
      total: orders[orders.length - 1].total,
      created_at: orders[orders.length - 1].created_at
    })
  }

  async update(req, res) {
    const { status, order_id, user_id } = req.body

    await knex('orders').update({ status }).where({ id: order_id, user_id })

    return res.json()
  }

  async index (req, res) {
    const orders = await knex('orders').select()

    return res.json(orders)
  }
}

module.exports = OrdersController