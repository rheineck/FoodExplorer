const knex = require("../database/knex");
const AppError = require('../utils/AppError');
const DiskStorage = require("../providers/DiskStorage")
const sqliteConnection = require("../database/sqlite");

class DishesController {
  async create(request, response) {
    const { category, name, price, description, ingredients } = request.body;

    const database = await sqliteConnection();
    const checkIfFoodExists = await database.get("SELECT * FROM dishes WHERE name = (?)", [name]);

    if(checkIfFoodExists){
      throw new AppError("Prato já existente.")
    }

    const dishFilename = request.file.filename;
    const diskStorage = new DiskStorage()
    const filename = await diskStorage.saveFile(dishFilename)

    const dishes_id = await knex("dishes").insert({
      picture: filename,
      category,
      name,
      price,
      description
    });

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        dishes_id,
        name: ingredient
      }
    })

    await knex("ingredients").insert(ingredientsInsert);

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients").where({ dishes_id: id}).orderBy("name");

    return response.json({
      ...dish,
      ingredients
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { name, ingredients } = request.query;

    let dishes;

    if(ingredients) {

      const filterIngredients = ingredients.split(',').map(tag => tag.trim());

      dishes = await knex("ingredients")
        .select([
          "dishes.id",
          "dishes.name",
        ])
        .whereLike("dishes.name", `%${name}%`)
        .whereIn("name", filterIngredients) 
        .innerJoin("dishes", "dishes.id", "ingredients.dishes_id")
        .orderBy("dishes.name")
    } else {
      dishes = await knex("dishes")
      .whereLike("name", `%${name}%`)
    }

    const dishesIngredients = await knex("ingredients");
    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredient = dishesIngredients.filter(ingredient => ingredient.dishes_id === dishes.id);

      return {
        ...dish,
        ingredients: dishIngredient
      }
    })

    return response.json(dishesWithIngredients);
  }

  async update(request, response) {
    const { category, name, price, description, ingredients } = request.body;
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();

    if(!dish){
      throw new AppError("O prato que você está tentando editar não existe!");
    }

    dish.category = category ?? dish.category;
    dish.name = name ?? dish.name;
    dish.price = price ?? dish.price;
    dish.description = description ?? dish.description;

    await knex("dishes").where({ id }).update(dish);
    await knex("dishes").where({ id }).update("updated_at", knex.fn.now());

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        dishes_id: id,
        name : ingredient
      }
    })

    await knex("ingredients").where({ dishes_id: id}).delete();
    await knex("ingredients").where({ dishes_id: id}).insert(ingredientsInsert);

    return response.status(202).json('Prato atualizado com sucesso')
  }
}

module.exports = DishesController;