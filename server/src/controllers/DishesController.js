const knex = require('../database/index')
const IngredientsRepository = require('../repositories/IngredientsRepository')
const DishesRepository = require('../repositories/DishesRepository')
const AppError = require('../utils/AppError')
const DishesCreateService = require('../services/DishesCreateService')

class DishesController {
  async create(req, res) {
    const { name, category, description, price, ingredients } = req.body
    
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

    return res.status(201).json()

  }

  async update(req, res) {
    const { name, category, description, price, ingredients } = req.body
    const { id } = req.params

    const dishes = await knex('dishes').where({ id })

    if(!dishes) {
      throw new AppError('Nenhum prato encontrado!')
    }

    dishes.name = name ?? dishes.name
    dishes.category = category ?? dishes.category
    dishes.description = description ?? dishes.description
    dishes.price = price ?? dishes.price
    
    await knex('dishes').where({ id }).update({
      name,
      category,
      description,
      price,
    })

    if(ingredients) {
      const ingredientLength = ingredients.length

      for (let i = 0; i < ingredientLength; i++) {
        await knex('ingredients').where({ dishes_id: id }).insert({
          name: ingredients[i],
          dishes_id: id
        })
      }
    }

    return res.status(200).json()

  }

  async show (req, res) {
    const { id } = req.params

    const dishes = await knex('dishes').where({ id }).first()
    const ingredients = await knex('ingredients').where({ dishes_id: id }).orderBy('name')

    return res.json({
      ...dishes,
      ingredients
    })
  }

  async delete(req, res) {
    const { id } = req.params
    
    await knex('dishes').where({ id }).del()

    return res.json()
  }

  async index(req, res) {
    const { name, ingredients } = req.query

    let dishes
    if(ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim())

      dishes = await knex('ingredients')
        .select([
          'dishes.id', 
          'dishes.name',
          'dishes.description',
          'dishes.category',
          'dishes.price',
          'dishes.photo'
        ])
        .whereLike('dishes.name', `%${name}%`)
        .whereIn('name', filterIngredients)
        .innerJoin('dishes', 'dishes.id', 'ingredients.dishes_id')
        .orderBy('dishes.name')

    } else {
      dishes = await knex('dishes')
        .whereLike('name', `%${name}%`)
    }
    
    const dishesIngredients = await knex('ingredients')
    const dishWithIngredient = dishes.map(dish => {
      const dishIngredients = dishesIngredients.filter(ingredient => ingredient.dishes_id === dish.id)

      return {
        ...dishes,
        ingredients: dishIngredients
      }
    })

    return res.status(200).json(dishWithIngredient)
    
  }
}

module.exports = DishesController