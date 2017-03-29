exports.up = knex => {
  return knex.schema.createTable('votes', table => {
    table.increments();
    table.integer('employee_id').references('employees.user_id');
    table.integer('role_id').references('roles.id');
    table.integer('shift_id').references('shifts.id');
    table.integer('quantity').defaultTo(2);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('votes');
};