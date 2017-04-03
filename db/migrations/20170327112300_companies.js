exports.up = knex => {
  return knex.schema.createTable('companies', table => {
    table.increments();
    table.integer('owner_id').references('admins.user_id').onDelete('CASCADE');
    table.string('name');
    table.string('industry');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('companies');
};
