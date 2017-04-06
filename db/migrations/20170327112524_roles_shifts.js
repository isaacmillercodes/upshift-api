exports.up = knex => {
  return knex.schema.createTable('roles_shifts', table => {
    table.integer('role_id').references('roles.id').onDelete('CASCADE');
    table.integer('shift_id').references('shifts.id').onDelete('CASCADE');
    table.integer('quantity').defaultTo(1);
    table.primary(['role_id', 'shift_id']);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('roles_shifts');
};
