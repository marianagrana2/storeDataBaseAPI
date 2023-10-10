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

// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAllClients,
  findOneClient

}
