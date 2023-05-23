const DishesRepositoryInMemory = require("../../repositories/inMemory/DishesRepositoryInMemory")
const IngredientsRepositoryInMemory = require("../../repositories/inMemory/IngredientsRepositoryInMemory")
const DishesCreateService = require("../DishesCreateService")

describe("DishesCreateService", () => {
  let dishesRepositoryInMemory = null
  let ingredientsRepositoryInMemory = null
  let dishesCreateService = null

  beforeEach(() => {
    dishesRepositoryInMemory = new DishesRepositoryInMemory()
    ingredientsRepositoryInMemory = new IngredientsRepositoryInMemory()
    dishesCreateService = new DishesCreateService(dishesRepositoryInMemory, ingredientsRepositoryInMemory)
  })

  it("should be able to create a dish", async () => {
    const dish = {
      name: 'Test Dish',
      category: 'Test Category',
      description: 'Test Description',
      price: 'tt.tt',
      ingredients: ['Test01', 'Test02']
    }

    const dishesCreated = await dishesCreateService.execute(dish)
    expect(dishesCreated).toHaveProperty('id')
  })
})