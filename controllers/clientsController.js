const ModelClients = require('../models/clients')
const findAllClients = (request, response) => {
  ModelClients.findAll()
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Clients', error })
    })
}
const findOneClient = (request, response) => {
  ModelClients.findOne(request.params.clientID)
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Client', error })
    })
}
module.exports = {
  findAllClients,
  findOneClient

}
