
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedules_shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedules_shifts').insert([
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-03'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-03'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-03'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-03'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-04'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-04'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-04'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-04'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-05'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-05'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-05'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-05'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-06'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-06'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-06'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-06'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-07'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-07'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-07'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-07'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-08'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-08'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-08'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-08'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-09'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-09'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-09'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-09'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-10'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-10'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-10'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-10'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-11'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-11'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-11'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-11'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-12'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-12'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-12'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-12'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-13'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-13'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-13'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-13'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-14'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-14'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-14'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-14'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-15'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-15'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-15'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-15'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-16'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-16'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-16'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-03',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-16'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-17'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-17'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-17'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-17'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-18'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-18'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-18'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-18'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-19'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-19'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-19'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-19'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-20'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-20'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-20'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-20'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-21'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-21'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-21'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-21'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-22'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-22'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-22'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-22'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-23'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-23'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-23'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-23'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-24'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-24'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-24'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-24'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-25'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-25'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-25'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-25'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-26'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-26'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-26'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-26'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-27'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-27'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-27'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-27'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-28'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-28'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-28'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-28'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-28'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-29'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-29'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-29'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-29'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Breakfast').select('id'),
          date: '2017-04-30'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Lunch').select('id'),
          date: '2017-04-30'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Raw Paleo Cafe').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Raw Dinner').select('id'),
          date: '2017-04-30'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Lunch').select('id'),
          date: '2017-04-30'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Dinner').select('id'),
          date: '2017-04-30'
        },
        {
          schedule_id: knex('schedules').where({
            start_date: '2017-04-17',
            location_id: knex('locations').where('name', 'Smackaroni Grille').select('id')
          }).select('id'),
          shift_id: knex('shifts').where('name', 'Smackaroni Bar Rush').select('id'),
          date: '2017-04-30'
        }
      ]);
    });
};
