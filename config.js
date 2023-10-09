const env = process.env.NODE_ENV || 'development'
// Configuración de variables de entorno del sistema.
const knexfile = require('./knexfile')
const knex = require('knex')

module.exports = knex(knexfile[env])
