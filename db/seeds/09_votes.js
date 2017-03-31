
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        //////////////////////////////////
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
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        },
        //////////////////////////////////
        //////////////////////////////////
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        }
        //////////////////////////////////
      ]);
    });
};
