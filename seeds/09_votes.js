
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where({
            date: '2017-04-03',
            schedule_id: knex('schedules').where({
                start_date: '2017-04-03',
                location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
              }).select('id'),
            name: 'Lunch',
          }).select('id'),
          quantity: 2
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where({
            date: '2017-04-03',
            schedule_id: knex('schedules').where({
                start_date: '2017-04-03',
                location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
              }).select('id'),
            name: 'Lunch',
          }).select('id'),
          quantity: 2
        },
      ]);
    });
};
