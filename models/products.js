// knex de archivo config.js
const knex = require('../config')
// Encontrar TODOS los productos
const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
}
// Encontrar un producto por ID
const findOne = (productID) => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
    .where({ product_id: productID })
}
// Eliminar POR COMPLETO un Producto
const destroy = (productID) => {
  return knex
    .del()
    .from('products')
    .where({ product_id: productID })
}
// Eliminar de la vista general pero sigue existiendo en la base de datos.
const softDelete = (productID) => {
  return knex
    .update({ active: false })
    .from('products')
    .where({ product_id: productID })
}

// Crear un producto
const create = (body) => {
  return knex
    .insert(body)
    .into('products')
    .returning(['product_id', 'name', 'description', 'product_price', 'sku'])
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAll,
  findOne,
  destroy,
  softDelete,
  create
}
