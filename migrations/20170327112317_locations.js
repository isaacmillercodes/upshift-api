exports.up = knex => {
  return knex.schema.createTable('locations', table => {
    table.increments();
    table.integer('company_id').references('companies.id');
    table.string('name');
    table.string('address');
    table.string('city');
    table.string('state');
    table.string('zip');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('locations');
};
