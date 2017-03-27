
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees_locations').insert([
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        }
      ]);
    });
};
