const knex = require('../database')
const { hash } = require('bcryptjs')

class PaymentsController {
  async create(req, res) {
    const { number, flag, type, security_code, name, expires } = req.body
    const user_id = req.user.id

    const hashedSecurityCode = await hash(security_code, 8)

    await knex('payments').insert({
      user_id,
      number,
      flag,
      type,
      security_code: hashedSecurityCode,
      name,
      expires
    })

    return res.status(201).json()
  }

  async delete(req, res) {
    const user_id = req.user.id

    await knex('payments').delete().where('user_id', user_id)

    return res.json()
  }

  async index(req, res) {
    const user_id = req.user.id

    const cards = await knex('payments').select().where('user_id', user_id)

    return res.json(cards)
  }

  async show(req, res) {
    const { id } = req.params

    const card = await knex('payments').select().where('id', id)

    return res.json(card)
  }
}

module.exports = PaymentsController