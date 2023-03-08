const knex = require('../database')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')

class DishesImgController {
  async update(req, res) {
    const { dishes_id } = req.params
    const dishImg = req.file.filename
    const diskStorage = new DiskStorage()

    const dishes = await knex('dishes').where({ id: dishes_id }).first()

    if(dishes.photo) {
      await diskStorage.deleteFile(dishes.photo)
    }

    const filename = await diskStorage.saveFile(dishImg)
    dishes.photo = filename

    await knex('dishes').update(dishes).where({ id: dishes_id })

    return res.json(dishes)
  }
}

module.exports = DishesImgController