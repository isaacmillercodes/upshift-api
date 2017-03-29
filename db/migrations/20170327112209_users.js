exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('email').unique();
    table.string('password');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('users');
};
