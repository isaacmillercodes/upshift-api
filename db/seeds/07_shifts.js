
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        {
          start_time: '07:00',
          end_time: '11:00',
          name: 'Raw Breakfast'
        },
        {
          start_time: '11:00',
          end_time: '15:00',
          name: 'Raw Lunch'
        },
        {
          start_time: '11:00',
          end_time: '15:00',
          name: 'Smackaroni Lunch'
        },
        {
          start_time: '17:00',
          end_time: '21:00',
          name: 'Raw Dinner'
        },
        {
          start_time: '17:00',
          end_time: '21:00',
          name: 'Smackaroni Dinner'
        },
        {
          start_time: '22:00',
          end_time: '02:00',
          name: 'Smackaroni Bar Rush'
        }
      ]);
    });
};
