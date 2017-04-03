exports.up = knex => {
  return knex.schema.createTable('schedules', table => {
    table.increments();
    table.integer('location_id').references('locations.id').onDelete('CASCADE');
    table.date('start_date');
    table.date('end_date');
    table.integer('votes_available').defaultTo(10);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('schedules');
};
