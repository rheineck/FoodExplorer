const knex = require('../database')

class IngredientsRepository {
  async create(ingredientsInsert) {
    const ingredientsId = await knex('ingredients').insert(ingredientsInsert)

    return ingredientsId
  }
}

module.exports = IngredientsRepository