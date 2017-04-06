exports.up = knex => {
  return knex.schema.createTable('employees_roles', table => {
    table.integer('employee_id').references('employees.user_id').onDelete('CASCADE');
    table.integer('role_id').references('roles.id').onDelete('CASCADE');
    table.primary(['employee_id', 'role_id']);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('employees_roles');
};
