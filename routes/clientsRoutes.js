const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clientsController')

router.get('/clients', clientsController.findAllClients)
router.get('/clients/:clientID', clientsController.findOneClient)

module.exports = router
