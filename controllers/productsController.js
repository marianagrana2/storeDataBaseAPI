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

const findOneProduct = (request, response) => {
  ModelProducts.findOne(request.params.productID)
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Product', error })
    })
}
module.exports = {
  findAllProducts,
  findOneProduct
}
