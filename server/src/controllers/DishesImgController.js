const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishesPictureController {
  async update(request, response) {
    const { id } = request.params;

    const pictureFilename = request.file.filename;
    const diskStorage = new DiskStorage();

    const dish = await knex("dishes").where({ id }).first();

    if(!dish) {
      throw new AppError("O prato que você deseja editar não existe.", 401);
    }

    if(dish.picture) {
      await diskStorage.deleteFile(dish.picture);
    }

    const filename = await diskStorage.saveFile(pictureFilename);
    dish.picture = filename;

    await knex("dishes").update(dish).where({ id });

    return response.json(dish);
  }
}

module.exports = DishesPictureController;