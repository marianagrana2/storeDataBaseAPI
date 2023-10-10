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

// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAll,
  findOne
}
