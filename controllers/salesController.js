const ModelSales = require('../models/sales')
const findAllSales = (request, response) => {
  ModelSales.findAll()
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Sales', error })
    })
}
module.exports = {
  findAllSales
}
