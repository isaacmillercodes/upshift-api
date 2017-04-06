exports.up = knex => {
  return knex.schema.createTable('schedules_shifts', table => {
    table.integer('schedule_id').references('schedules.id').onDelete('CASCADE');
    table.integer('shift_id').references('shifts.id').onDelete('CASCADE');
    table.date('date');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('schedules_shifts');
};
