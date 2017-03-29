exports.up = knex => {
  return knex.schema.createTable('schedules', table => {
    table.increments();
    table.integer('location_id').references('locations.id');
    table.date('start_date');
    table.date('end_date');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('schedules');
};
