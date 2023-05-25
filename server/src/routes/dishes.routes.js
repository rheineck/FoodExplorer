const { Router } = require("express");

const multer = require('multer');
const uploadConfig = require('../configs/upload');
const upload = multer(uploadConfig.MULTER);

const DishesController = require("../controllers/DishesController");
const DishesImgController = require("../controllers/DishesImgController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();

const dishesController = new DishesController();
const dishesImgController = new DishesImgController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post("/", upload.single("picture"), dishesController.create);
dishesRoutes.put("/:id", upload.single("picture"), dishesController.update);
dishesRoutes.patch("/picture/:id", upload.single("picture"), dishesImgController.update);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.index);

module.exports = dishesRoutes;