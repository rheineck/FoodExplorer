const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const dishesRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const DishesController = require('../controllers/DishesController')
const DishesImgController = require('../controllers/DishesImgController')
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const dishesController = new DishesController()
const dishesImgController = new DishesImgController()

dishesRoutes.post('/', ensureAuthenticated, dishesController.create)
dishesRoutes.put('/:id', dishesController.update)
dishesRoutes.get('/:id', ensureAuthenticated, dishesController.show)
dishesRoutes.delete('/:id', dishesController.delete)
dishesRoutes.get('/', ensureAuthenticated, dishesController.index)
dishesRoutes.patch('/img/:dishes_id', upload.single('img'), dishesImgController.update)

module.exports = dishesRoutes