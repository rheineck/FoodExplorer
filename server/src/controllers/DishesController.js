const knex = require('../database/index')
const AppError = require('../utils/AppError')

class DishesController {
  async create(request, response) {
    const { name, category, description, price, ingredients } = request.body
    
    const dishes_id = await knex('dishes').insert({
      name,
      category,
      description,
      price
    })

    const ingredientsInsert = ingredients.map(name => {
      return {
        name,
        dishes_id
      }
    })

    await knex('ingredients').insert(ingredientsInsert)

    response.json()

  }

  async update(request, response) {
    const { name, category, description, price, ingredients } = request.body
    const { id } = request.params

    const dishes = await knex('dishes').where({ id })
    const ingredient = await knex('ingredients').where({ dishes_id: id })
    console.log(ingredient)

    console.log(dishes)

    if(!dishes) {
      throw new AppError('Nenhum prato encontrado!')
    }

    dishes.name = name ?? dishes.name
    dishes.category = category ?? dishes.category
    dishes.description = description ?? dishes.description
    dishes.price = price ?? dishes.price

    const ingredientsUpdated = ingredients.map(name => {
      return name
    })

    ingredient.name = ingredientsUpdated ?? ingredient.name

    console.log(ingredientsUpdated)
    
    await knex('dishes').where({ id }).update({
      name,
      category,
      description,
      price,
    })

    await knex('ingredients').where({ dishes_id: id }).insert({
      name: ingredientsUpdated,
      dishes_id: id
    })

    response.json()

  }

  async show (request, response) {
    const { id } = request.params

    const dishes = await knex('dishes').where({ id }).first()
    const ingredients = await knex('ingredients').where({ dishes_id: id }).orderBy('name')

    return response.json({
      ...dishes,
      ingredients
    })
  }

  async delete(request, response) {
    const { id } = request.params
    
    await knex('dishes').where({ id }).delete()

    return response.json()
  }

  async index(request, response) {}
}

module.exports = DishesController