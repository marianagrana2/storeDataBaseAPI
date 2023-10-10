// Models de Sales
const ModelSales = require('../models/sales')
// Mostrar TODAS las sales
const findAllSales = (request, response) => {
  ModelSales.findAll()
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Sales', error })
    })
}
// Encontrar un cliente según su salesID
const findOneSale = (request, response) => {
  ModelSales.findOne(request.params.salesID)
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Sale', error })
    })
}

// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAllSales,
  findOneSale
}
