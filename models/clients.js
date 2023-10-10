const knex = require('../config')

const findAll = () => {
  return knex
    .select('*')
    .from('clients')
    .where('active', true)
}

const findOne = (clientID) => {
  return knex
    .select('*')
    .from('clients')
    .where('active', true)
    .where({ client_id: clientID })
}
module.exports = {
  findAll,
  findOne
}
