/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('clients').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('clients', function (table) {
        table.increments('client_id').primary()
        table.string('name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable().unique()
        table.string('phone').notNullable().unique()
        table.text('address')
        table.string('district')
        table.integer('zip')
        table.string('city').notNullable()
        table.boolean('active').defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('clients').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('clients')
    }
  })
}
