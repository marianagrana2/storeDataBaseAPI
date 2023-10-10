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

// Eliminar POR COMPLETO un cliente
const destroy = (clientID) => {
  return knex
    .select('*')
    .from('clients')
    .where({ client_id: clientID })
}
// Eliminar de la vista general pero sigue existiendo en la base de datos.
const softDelete = (clientID) => {
  return knex
    .update({ active: false })
    .from('clients')
    .where({ client_id: clientID })
}
// Exportar las funciones para usarlas en otra parte del código
module.exports = {
  findAll,
  findOne,
  destroy,
  softDelete
}
