
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules').insert([
        {
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id'),
          start_date: '2017-04-03',
          end_date: '2017-04-16',
          votes_available: 15
        },
        {
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id'),
          start_date: '2017-04-03',
          end_date: '2017-04-16',
          votes_available: 15
        },
        {
          location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id'),
          start_date: '2017-04-17',
          end_date: '2017-04-30',
          votes_available: 15
        },
        {
          location_id: knex('locations').where('name', 'Smackaroni Grille').select('id'),
          start_date: '2017-04-17',
          end_date: '2017-04-30',
          votes_available: 15
        }
      ]);
    });
};
