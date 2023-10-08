/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      product_id: 1,
      name: 'Tortillas de maíz',
      description: 'Tortillas de maíz hechas a mano',
      product_price: 15,
      sku: 12345
    },
    {
      product_id: 2,
      name: 'Chiles enlatados',
      description: 'Chiles jalapeños enlatados',
      product_price: 12,
      sku: 23456
    },
    {
      product_id: 3,
      name: 'Aguacates',
      description: 'Aguacates Hass frescos',
      product_price: 25,
      sku: 45678
    },
    {
      product_id: 4,
      name: 'Frijoles refritos',
      description: 'Frijoles refritos enlatados',
      product_price: 18,
      sku: 56789
    },
    {
      product_id: 5,
      name: 'Salsa verde',
      description: 'Salsa verde de tomatillo',
      product_price: 12,
      sku: 23467
    },
    {
      product_id: 6,
      name: 'Jalapeños en escabeche',
      description: 'Jalapeños en escabeche enlatados',
      product_price: 9,
      sku: 59860
    },
    {
      product_id: 7,
      name: 'Limones',
      description: 'Limones frescos',
      product_price: 40,
      sku: 43268
    },
    {
      product_id: 8,
      name: 'Arroz',
      description: 'Arroz blanco en bolsa',
      product_price: 30,
      sku: 19087
    },
    {
      product_id: 9,
      name: 'Refresco',
      description: 'Refresco de coca cola',
      product_price: 12,
      sku: 78901
    },
    {
      product_id: 10,
      name: 'Tortillas de harina',
      description: 'Tortillas de harina para cualquier ocasion',
      product_price: 15,
      sku: 70785
    }
  ])
}
