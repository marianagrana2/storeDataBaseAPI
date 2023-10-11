// Uso de Express, router y controlador de sales
const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')
// Routes a usar con la tabla sales
router.get('/sales', salesController.findAllSales)
router.get('/sales/:salesID', salesController.findOneSale)
router.delete('/sales/destroy/:salesID', salesController.destroyOneSale)
router.delete('/sales/:salesID', salesController.softDeleteOneSale)
router.post('/sales', salesController.createSale)
// Exportar el router
module.exports = router
