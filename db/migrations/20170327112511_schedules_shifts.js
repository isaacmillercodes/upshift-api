exports.up = knex => {
  return knex.schema.createTable('schedules_shifts', table => {
    table.integer('schedule_id').references('schedules.id');
    table.integer('shift_id').references('shifts.id');
    table.primary(['schedule_id', 'shift_id']);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('schedules_shifts');
};
