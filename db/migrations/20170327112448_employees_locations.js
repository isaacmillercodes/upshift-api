exports.up = knex => {
  return knex.schema.createTable('employees_locations', table => {
    table.integer('employee_id').references('employees.user_id').onDelete('CASCADE');
    table.integer('location_id').references('locations.id').onDelete('CASCADE');
    table.primary(['employee_id', 'location_id']);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('employees_locations');
};
