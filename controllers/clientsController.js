// Models de Clients
const ModelClients = require('../models/clients')
// Mostrar TODOS clientes
const findAllClients = (request, response) => {
  ModelClients.findAll()
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Clients', error })
    })
}
// Encontrar un cliente según su clientID
const findOneClient = (request, response) => {
  ModelClients.findOne(request.params.clientID)
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Client', error })
    })
}

// Eliminar POR COMPLETO un cliente
const destroyOneClient = (request, response) => {
  ModelClients.destroy(request.params.clientID)
    .then((result) => {
      result.status(204).send()
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error destroying client', error })
    })
}

// Eliminar parcialmente un cliente
const softDeleteOneClient = (request, response) => {
  ModelClients.softDelete(request.params.clientID)
    .then((result) => {
      response.status(204).send()
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error deleting Client', error })
    })
}
// Agregar Cliente
const createClient = (request, response) => {
  ModelClients.create(request.body)
    .then((result) => {
      response.status(201).send({ message: 'Client created', data: result })
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error creating Client', error })
    })
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAllClients,
  findOneClient,
  destroyOneClient,
  softDeleteOneClient,
  createClient

}
