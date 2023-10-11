// Uso de Express, router y controlador de productos
const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
// Routes a usar con la tabla products
router.get('/products', productsController.findAllProducts)
router.get('/products/:productID', productsController.findOneProduct)
router.delete('/products/destroy/:productID', productsController.destroyOneProduct)
router.delete('/products/:productID', productsController.softDeleteOneProduct)
router.post('/products', productsController.createProduct)
// Exportar el router
module.exports = router
