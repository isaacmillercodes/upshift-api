
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees_locations').insert([
        {
          employee_id: knex('employees').where('email', 'shane@mcmahon.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'stephanie@mcmahon.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'dwayne@johnson.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'steve@austin.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'mick@foley.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'triple@h.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'john@cena.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'randy@savage.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'charlotte@flair.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'kevin@owens.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'brock@lesnar.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'chris@jericho.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'trish@stratus.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'aj@styles.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'shawn@michaels.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'sasha@banks.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'finn@balor.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'shinsuke@nakamura.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'becky@lynch.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'dean@ambrose.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'kurt@angle.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'seth@rollins.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'sami@zayn.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
        },
        {
          employee_id: knex('employees').where('email', 'daniel@bryan.com').select('user_id'),
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
        }
      ]);
    });
};
