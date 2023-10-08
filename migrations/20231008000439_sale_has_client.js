/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (exists) {
      return knex.schema.table('sales', function (table) {
        table.integer('fk_client')
          .unsigned()
          .references('clients.client_id')
        table.integer('fk_product')
          .unsigned()
          .references('products.product_id')
      })
    };
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (exists) {
      return knex.schema.table('sales', function (table) {
        table.dropColumn('fk_client')
        table.dropColumn('fk_product')
      })
    };
  })
}
