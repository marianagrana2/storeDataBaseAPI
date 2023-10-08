/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('sales').truncate()
  await knex('sales').insert([
    {
      sale_id: 1,
      client_name: 'Fran',
      unities_sale: 1,
      description_product: 'Limones frescos',
      total_sale: 40,
      city: 'Monterrey',
      fk_client: 10,
      fk_product: 7
    },
    {
      sale_id: 2,
      client_name: 'Maria',
      unities_sale: 1,
      description_product: 'Arroz blanco en bolsa',
      total_sale: 30,
      city: 'Monterrey',
      fk_client: 3,
      fk_product: 8

    },
    {
      sale_id: 3,
      client_name: 'Laura',
      unities_sale: 5,
      description_product: 'Salsa verde de tomatillo',
      total_sale: 60,
      city: 'Cancun',
      fk_client: 5,
      fk_product: 5

    },
    {
      sale_id: 4,
      client_name: 'Roberto',
      unities_sale: 12,
      description_product: 'Refresco de coca cola',
      total_sale: 144,
      city: 'Merida',
      fk_client: 8,
      fk_product: 9

    },
    {
      sale_id: 5,
      client_name: 'Carlos',
      unities_sale: 15,
      description_product: 'Tortillas de harina para cualquier ocasion',
      total_sale: 225,
      city: 'Tijuana',
      fk_client: 4,
      fk_product: 10

    },
    {
      sale_id: 6,
      client_name: 'Carlos',
      unities_sale: 10,
      description_product: 'Frijoles refritos enlatados',
      total_sale: 180,
      city: 'Tijuana',
      fk_client: 4,
      fk_product: 4

    },
    {
      sale_id: 7,
      client_name: 'Carlos',
      unities_sale: 20,
      description_product: 'Aguacates Hass frescos',
      total_sale: 500,
      city: 'Tijuana',
      fk_client: 4,
      fk_product: 3

    },

    {
      sale_id: 8,
      client_name: 'Ana',
      unities_sale: 4,
      description_product: 'Limones frescos',
      total_sale: 160,
      city: 'Guadalajara',
      fk_client: 7,
      fk_product: 7

    },
    {
      sale_id: 9,
      client_name: 'Sofia',
      unities_sale: 2,
      description_product: 'Refresco de coca cola',
      total_sale: 24,
      city: 'Cancun',
      fk_client: 9,
      fk_product: 9

    },
    {
      sale_id: 10,
      client_name: 'Juan',
      unities_sale: 3,
      description_product: 'Arroz blanco en bolsa',
      total_sale: 90,
      city: 'CDMX',
      fk_client: 1,
      fk_product: 8
    },
    {
      sale_id: 11,
      client_name: 'Roberto',
      unities_sale: 1,
      description_product: 'Chiles jalapeños enlatados',
      total_sale: 12,
      city: 'Merida',
      fk_client: 8,
      fk_product: 2

    },
    {
      sale_id: 12,
      client_name: 'Sofia',
      unities_sale: 8,
      description_product: 'Aguacates Hass frescos',
      total_sale: 200,
      city: 'Cancun',
      fk_client: 9,
      fk_product: 3

    },
    {
      sale_id: 13,
      client_name: 'Ana',
      unities_sale: 2,
      description_product: 'Arroz blanco en bolsa',
      total_sale: 60,
      city: 'Guadalajara',
      fk_client: 7,
      fk_product: 8

    },
    {
      sale_id: 14,
      client_name: 'Fran',
      unities_sale: 4,
      description_product: 'Salsa verde de tomatillo',
      total_sale: 48,
      city: 'Monterrey',
      fk_client: 10,
      fk_product: 5

    },
    {
      sale_id: 15,
      client_name: 'Juan',
      unities_sale: 12,
      description_product: 'Chiles jalapeños enlatados',
      total_sale: 144,
      city: 'CDMX',
      fk_client: 1,
      fk_product: 2

    },
    {
      sale_id: 16,
      client_name: 'Juan',
      unities_sale: 2,
      description_product: 'Tortillas de maíz hechas a mano',
      total_sale: 30,
      city: 'CDMX',
      fk_client: 1,
      fk_product: 1

    },
    {
      sale_id: 17,
      client_name: 'Roberto',
      unities_sale: 12,
      description_product: 'Refresco de coca cola',
      total_sale: 120,
      city: 'Merida',
      fk_client: 8,
      fk_product: 9

    },
    {
      sale_id: 18,
      client_name: 'Roberto',
      unities_sale: 24,
      description_product: 'Tortillas de maíz hechas a mano',
      total_sale: 360,
      city: 'Merida',
      fk_client: 8,
      fk_product: 1

    },
    {
      sale_id: 19,
      client_name: 'Roberto',
      unities_sale: 6,
      description_product: 'Chiles jalapeños enlatados',
      total_sale: 72,
      city: 'Merida',
      fk_client: 8,
      fk_product: 2

    },
    {
      sale_id: 20,
      client_name: 'Roberto',
      unities_sale: 11,
      description_product: 'Frijoles refritos enlatados',
      total_sale: 198,
      city: 'Merida',
      fk_client: 8,
      fk_product: 4

    },
    {
      sale_id: 21,
      client_name: 'Roberto',
      unities_sale: 1,
      description_product: 'Salsa verde de tomatillo',
      total_sale: 12,
      city: 'Merida',
      fk_client: 8,
      fk_product: 5

    },
    {
      sale_id: 22,
      client_name: 'Roberto',
      unities_sale: 1,
      description_product: 'Aguacates Hass frescos',
      total_sale: 25,
      city: 'Merida',
      fk_client: 8,
      fk_product: 3

    },
    {
      sale_id: 23,
      client_name: 'Roberto',
      unities_sale: 3,
      description_product: 'Jalapeños en escabeche enlatados',
      total_sale: 27,
      city: 'Merida',
      fk_client: 8,
      fk_product: 6

    },
    {
      sale_id: 24,
      client_name: 'Roberto',
      unities_sale: 12,
      description_product: 'Limones frescos',
      total_sale: 480,
      city: 'Merida',
      fk_client: 8,
      fk_product: 7

    },
    {
      sale_id: 25,
      client_name: 'Roberto',
      unities_sale: 2,
      description_product: 'Arroz blanco en bolsa',
      total_sale: 60,
      city: 'Merida',
      fk_client: 8,
      fk_product: 8

    },
    {
      sale_id: 26,
      client_name: 'Roberto',
      unities_sale: 2,
      description_product: 'Tortillas de harina para cualquier ocasion',
      total_sale: 30,
      city: 'Merida',
      fk_client: 8,
      fk_product: 10

    }
  ])
}
