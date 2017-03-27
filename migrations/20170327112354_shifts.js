exports.up = knex => {
  return knex.schema.createTable('shifts', table => {
    table.increments();
    table.integer('schedule_id').references('schedules.id');
    table.time('start_time');
    table.time('end_time');
    table.string('name');
    table.date('date');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('shifts');
};
