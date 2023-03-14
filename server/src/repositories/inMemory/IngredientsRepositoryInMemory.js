class IngredientsRepositoryInMemory {
  ingredients = []

  async create({ name }) {
    const ingredient = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      dishes_id: Math.floor(Math.random() * 1000) + 1
    }

    this.ingredients.push(ingredient)

    return ingredient
  }
}

module.exports = IngredientsRepositoryInMemory