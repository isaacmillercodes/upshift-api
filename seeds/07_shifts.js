
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-03',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-03',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-03',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-03',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-03',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-03',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-04',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-04',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-04',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-04',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-04',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-04',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-05',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-05',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-05',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-05',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-05',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-05',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-06',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-06',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-06',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-06',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-06',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-06',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-07',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-07',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-07',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-07',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-07',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-07',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-08',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-08',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-08',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-08',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-08',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-08',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-09',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-09',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-09',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-09',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-09',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-09',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-10',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-10',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-10',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-10',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-10',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-10',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-11',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-11',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-11',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-11',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-11',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-11',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-12',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-12',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-12',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-12',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-12',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-12',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-13',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-13',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-13',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-13',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-13',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-13',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-14',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-14',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-14',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-14',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-14',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-14',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-15',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-15',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-15',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-15',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-15',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-15',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-16',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-16',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-16',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-16',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-16',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-03',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-16',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////

        // Schedule 2


        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-17',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-17',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-17',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-17',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-17',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-17',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-18',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-18',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-18',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-18',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-18',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-18',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-19',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-19',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-19',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-19',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-19',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-19',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-20',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-20',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-20',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-20',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-20',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-20',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-21',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-21',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-21',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-21',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-21',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-21',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-22',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-22',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-22',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-22',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-22',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-22',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-23',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-23',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-23',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-23',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-23',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-23',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-24',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-24',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-24',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-24',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-24',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-24',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-25',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-25',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-25',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-25',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-25',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-25',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-26',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-26',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-26',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-26',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-26',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-26',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-27',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-27',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-27',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-27',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-27',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-27',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-28',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-28',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-28',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-28',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-28',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-28',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-29',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-29',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-29',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-29',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-29',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-29',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-30',
          start_time: '07:00',
          end_time: '11:00',
          name: 'Breakfast'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-30',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-30',
          start_time: '11:00',
          end_time: '14:00',
          name: 'Lunch'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
            }).select('id'),
          date: '2017-04-30',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-30',
          start_time: '17:00',
          end_time: '21:00',
          name: 'Dinner'
        },
        {
          schedule_id: knex('schedules').where({
              start_date: '2017-04-17',
              location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
            }).select('id'),
          date: '2017-04-30',
          start_time: '22:00',
          end_time: '02:00',
          name: 'Bar Rush'
        },
        ////////////////////////////////////////////////////////////////////
      ]);
    });
};
