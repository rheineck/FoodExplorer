const knex = require('../database')
const AppError = require('../utils/AppError')

class FavoritesController {
  async create(req, res) {
    const { dishes_id, user_id } = req.params

    // const favoritesDishes = await knex('favorites').select().where({dishes_id, user_id})
    // console.log(favoritesDishes)

    // if(favoritesDishes) {
    //   throw new AppError('Prato já adicionado nos favoritos!')
    // }
    
    await knex('favorites').insert({dishes_id, user_id})

    return res.json()
  }

  async delete(req, res) {
    const { dishes_id, user_id } = req.params

    const favoritesDishes = await knex('favorites').select().where({ dishes_id, user_id })

    if(!favoritesDishes) {
      throw new AppError('Prato não adicionado nos favoritos!')
    }

    await knex('favorites').del().where({ dishes_id, user_id })

    return res.json()
  }

  async index(req, res) {
    const { user_id } = req.params

    const dishes_id = await knex('favorites').where({ user_id }).select('dishes_id')

    const dish_id = dishes_id.map(dish_id => Object.values(dish_id))
    
    const favoritesDishes = await knex('dishes').whereIn('id', dish_id)

    return res.json({ favoritesDishes })
  }
}

module.exports = FavoritesController