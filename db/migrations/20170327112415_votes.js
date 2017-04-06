exports.up = knex => {
  return knex.schema.createTable('votes', table => {
    table.increments();
    table.integer('employee_id').references('employees.user_id').onDelete('CASCADE');
    table.integer('role_id').references('roles.id').onDelete('CASCADE');
    table.integer('shift_id').references('shifts.id').onDelete('CASCADE');
    table.date('date');
    table.integer('quantity').defaultTo(1);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('votes');
};
