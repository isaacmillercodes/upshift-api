
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees_roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees_roles').insert([
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Schedule Admin').select('id')
        }
      ]);
    });
};
