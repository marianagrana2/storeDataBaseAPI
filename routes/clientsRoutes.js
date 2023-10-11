// Uso de Express, router y controlador de clients
const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clientsController')
// Routes a usar con la tabla clients
router.get('/clients', clientsController.findAllClients)
router.get('/clients/:clientID', clientsController.findOneClient)
router.delete('/clients/destroy/:clientID', clientsController.destroyOneClient)
router.delete('/clients/:clientID', clientsController.softDeleteOneClient)
router.post('/clients', clientsController.createClient)
// Exportar el router
module.exports = router
