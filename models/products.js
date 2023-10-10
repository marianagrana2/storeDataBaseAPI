const knex = require('../config')

const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
}

const findOne = (productID) => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
    .where({ product_id: productID })
}

module.exports = {
  findAll,
  findOne
}
