exports.up = knex => {
  return knex.schema.createTable('admins', table => {
    table.integer('user_id').references('users.id').primary();
    table.boolean('enabled').defaultTo(true);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('admins');
};
