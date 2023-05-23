class DishesRepositoryInMemory {
  dishes = []

  async create({ name, category, description, price, ingredients }) {
    const dish = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      category,
      description,
      price,
      ingredients
    }

    this.dishes.push(dish)

    return dish
  }
}

module.exports = DishesRepositoryInMemory