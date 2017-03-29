exports.up = knex => {
  return knex.schema.createTable('employees', table => {
    table.integer('user_id').references('users.id').primary();
    table.string('email').unique();
    table.string('first_name');
    table.string('last_name');
    table.string('phone');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('employees');
};
