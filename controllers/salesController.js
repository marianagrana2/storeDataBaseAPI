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
// Eliminar POR COMPLETO una venta
const destroyOneSale = (request, response) => {
  ModelSales.destroy(request.params.salesID)
    .then((result) => {
      result.status(204).send()
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error destroying sale', error })
    })
}
// Eliminar parcialmente una venta
const softDeleteOneSale = (request, response) => {
  ModelSales.softDelete(request.params.salesID)
    .then((result) => {
      response.status(204).send()
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error deleting Sale', error })
    })
}
// Agregar Venta
const createSale = (request, response) => {
  ModelSales.create(request.body)
    .then((result) => {
      response.status(201).send({ message: 'Sale created', data: result })
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error creating Sale', error })
    })
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAllSales,
  findOneSale,
  destroyOneSale,
  softDeleteOneSale,
  createSale
}
