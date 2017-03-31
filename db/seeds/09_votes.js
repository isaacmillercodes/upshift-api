
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
      ]);
    });
};
