const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')

router.get('/sales', salesController.findAllSales)

module.exports = router
