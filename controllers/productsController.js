// Models de Products
const ModelProducts = require('../models/products')
// Mostrar TODOS los productos
const findAllProducts = (request, response) => {
  ModelProducts.findAll()
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Products', error })
    })
}
// Encontrar un cliente según su productID
const findOneProduct = (request, response) => {
  ModelProducts.findOne(request.params.productID)
    .then((result) => {
      response.status(200).send(result)
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error listing Product', error })
    })
}

// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAllProducts,
  findOneProduct
}
