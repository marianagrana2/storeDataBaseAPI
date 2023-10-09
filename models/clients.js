const knex = require('../config')

const findAll = () => {
  return knex
    .select('*')
    .from('clients')
    .where('active', true)
}

module.exports = {
  findAll
}
