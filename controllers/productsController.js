const ModelProducts = require('../models/products')
const findAllProducts = (request, response) => {
  ModelProducts.findAll()
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Products', error })
    })
}
module.exports = {
  findAllProducts
}
