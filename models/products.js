const knex = require('../config')

const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
}

module.exports = {
  findAll
}
