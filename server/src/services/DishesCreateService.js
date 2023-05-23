class DishesCreateService {
  constructor(dishesRepository, ingredientsRepository) {
    this.dishesRepository = dishesRepository
    this.ingredientsRepository = ingredientsRepository
  }

  async execute({ name, category, description, price, ingredients }) {
    
    const dishes_id = await this.dishesRepository.create({ name, category, description, price })

    const ingredientsInsert = ingredients.map(name => {
      return {
        name,
        dishes_id
      }
    })

    await this.ingredientsRepository.create(ingredientsInsert)

    const dishesCreated = dishes_id

    return dishesCreated
  }
}

module.exports = DishesCreateService