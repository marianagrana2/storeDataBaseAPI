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
// Eliminar POR COMPLETO un producto
const destroyOneProduct = (request, response) => {
  ModelProducts.destroy(request.params.productID)
    .then((result) => {
      result.status(204).send()
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error destroying product', error })
    })
}

// Eliminar parcialmente un producto
const softDeleteOneProduct = (request, response) => {
  ModelProducts.softDelete(request.params.productID)
    .then((result) => {
      response.status(204).send()
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error deleting Product', error })
    })
}

// Agregar Producto
const createProduct = (request, response) => {
  ModelProducts.create(request.body)
    .then((result) => {
      response.status(201).send({ message: 'Product created', data: result })
    })
    .catch((error) => {
      response.status(400).send({ message: 'Error creating Product', error })
    })
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAllProducts,
  findOneProduct,
  destroyOneProduct,
  softDeleteOneProduct,
  createProduct

}
