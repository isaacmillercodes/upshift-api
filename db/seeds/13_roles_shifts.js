
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles_shifts').insert([
        {
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
        },
        {
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Head Chef').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Line Cook').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Host').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Manager').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id')
        },
        {
          role_id: knex('roles').where('title', 'Server').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          quantity: 2
        },
        {
          role_id: knex('roles').where('title', 'Bartender').select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          quantity: 2
        },
      ]);
    });
};
