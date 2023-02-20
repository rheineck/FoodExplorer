const knex = require('../database/index')

class IngredientsController {
  async delete(request, response) {
    const dishes_id = request.params
    
    await knex('ingredients').where('dishes_id', dishes_id).del()

    return response.json()

  }

  async index(request, response) {
    const dishes_id = request.params

    const ingredients = await knex('ingredients').where({ dishes_id })

    return response.json(ingredients)
  }
}

module.exports = IngredientsController