// knex de archivo config.js
const knex = require('../config')
// Encontrar TODOS los clientes
const findAll = () => {
  return knex
    .select('*')
    .from('clients')
    .where('active', true)
}
// Encontrar un cliente por ID
const findOne = (clientID) => {
  return knex
    .select('*')
    .from('clients')
    .where('active', true)
    .where({ client_id: clientID })
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAll,
  findOne
}
