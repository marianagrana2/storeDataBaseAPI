// knex de archivo config.js
const knex = require('../config')
// Encontrar TODAS las Ventas
const findAll = () => {
  return knex
    .select('*')
    .from('sales')
    .where('active', true)
}
// Encontrar una venta por ID
const findOne = (salesID) => {
  return knex
    .select('*')
    .from('sales')
    .where('active', true)
    .where({ sale_id: salesID })
}

// Eliminar POR COMPLETO una Venta
const destroy = (salesID) => {
  return knex
    .select('*')
    .from('sales')
    .where({ sale_id: salesID })
}
// Eliminar de la vista general pero sigue existiendo en la base de datos.
const softDelete = (salesID) => {
  return knex
    .update({ active: false })
    .from('sales')
    .where({ sale_id: salesID })
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAll,
  findOne,
  destroy,
  softDelete
}
