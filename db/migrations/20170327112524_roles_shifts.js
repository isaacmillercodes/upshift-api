exports.up = knex => {
  return knex.schema.createTable('roles_shifts', table => {
    table.integer('role_id').references('roles.id');
    table.integer('shift_id').references('shifts.id');
    table.integer('quantity').defaultTo(1);
    table.primary(['role_id', 'shift_id']);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('roles_shifts');
};
