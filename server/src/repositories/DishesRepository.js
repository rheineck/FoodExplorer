const knex = require('../database/index')

class DishesRepository {
  async create({ name, category, description, price }) {
    const dishes_id = await knex('dishes').insert({
      name,
      category,
      description,
      price
    })

    return dishes_id
  }
}

module.exports = DishesRepository