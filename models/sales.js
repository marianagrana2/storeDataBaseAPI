const knex = require('../config')

const findAll = () => {
  return knex
    .select('*')
    .from('sales')
    .where('active', true)
}

module.exports = {
  findAll
}
