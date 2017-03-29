exports.up = knex => {
  return knex.schema.createTable('roles', table => {
    table.increments();
    table.string('title');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('roles');
};
