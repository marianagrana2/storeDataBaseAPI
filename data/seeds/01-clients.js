/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('clients').del()
  await knex('clients').insert([
    {
      client_id: 1,
      name: 'Juan',
      last_name: 'Dominguez',
      email: 'juandom@example.com',
      phone: '1234567890',
      address: '123 Castillo de Chapultepec',
      district: 'Chapultepec',
      zip: 12345,
      city: 'CDMX'
    },
    {
      client_id: 2,
      name: 'Valeria',
      last_name: 'Rodriguez',
      email: 'valeriardz@example.com',
      phone: '0987654321',
      address: '456 Rosales',
      district: 'Las Flores',
      zip: 54321,
      city: 'Guadalajara'
    },
    {
      client_id: 3,
      name: 'Maria',
      last_name: 'Garcia',
      email: 'mariagarcia@example.com',
      phone: '5254565758',
      address: '789 2 sur',
      district: 'Berlin',
      zip: 67890,
      city: 'Monterrey'
    },
    {
      client_id: 4,
      name: 'Carlos',
      last_name: 'Lopez',
      email: 'carloslopez@example.com',
      phone: '2141315161',
      address: '321 Pino',
      district: 'Pueblo Nuevo',
      zip: 23456,
      city: 'Tijuana'
    },
    {
      client_id: 5,
      name: 'Laura',
      last_name: 'Martinez',
      email: 'lauramartinez@example.com',
      phone: '8979695949',
      address: '654  El Cedro',
      district: 'Los Verdes',
      zip: 76543,
      city: 'Cancun'
    },
    {
      client_id: 6,
      name: 'Pedro',
      last_name: 'Rodriguez',
      email: 'pedrorodriguez@example.com',
      phone: '27375767877',
      address: '987 9 poniente',
      district: 'Naranjas',
      zip: 45678,
      city: 'Puebla'
    },
    {
      client_id: 7,
      name: 'Ana',
      last_name: 'Hernandez',
      email: 'anahernandez@example.com',
      phone: '8232422622',
      address: '432 7 oriente',
      district: 'Manzanas',
      zip: 34567,
      city: 'Guadalajara'
    },
    {
      client_id: 8,
      name: 'Roberto',
      last_name: 'Gonzalez',
      email: 'robertogonzalez@example.com',
      phone: '4334504044',
      address: '876 Los Rosales',
      district: 'Floreal',
      zip: 56789,
      city: 'Merida'
    },
    {
      client_id: 9,
      name: 'Sofia',
      last_name: 'Romero',
      email: 'sofiaromero@example.com',
      phone: '6265678069',
      address: '234 Las Rosas',
      district: 'Floreales',
      zip: 67890,
      city: 'Cancun'
    },
    {
      client_id: 10,
      name: 'Fran',
      last_name: 'Torres',
      email: 'frantorres@example.com',
      phone: '2552222209',
      address: '543 Cedros',
      district: 'Verdes',
      zip: 90123,
      city: 'Monterrey'
    }
  ])
}
