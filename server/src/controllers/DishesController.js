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

    // const { name, category, description, price, ingredients } = req.body

    // const dishesRepository = new DishesRepository()
    // const ingredientsRepository = new IngredientsRepository()
    // const dishesCreateService = new DishesCreateService(dishesRepository, ingredientsRepository)

    // await dishesCreateService.execute({ name, category, description, price, ingredients })

    // return res.status(201).json()

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
    const { name, ingredient } = req.query
    
    let ingredients
    let dishes    
    
    if(ingredient) {
      
      ingredients = await knex('ingredients').select([
        'id',
        'name',
        'dishes_id'
      ]).whereLike('name', ingredient).orderBy('name')
      
    } else {
      dishes = await knex('dishes').whereLike('name', name).orderBy('name')
    }
   
    return res.json({
      dishes,
      ingredients
    })
  }
}

module.exports = DishesController