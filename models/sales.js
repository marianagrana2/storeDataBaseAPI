const knex = require('../config')

const findAll = () => {
  return knex
    .select('*')
    .from('sales')
    .where('active', true)
}

const findOne = (salesID) => {
  return knex
    .select('*')
    .from('sales')
    .where('active', true)
    .where({ sale_id: salesID })
}
module.exports = {
  findAll,
  findOne
}
