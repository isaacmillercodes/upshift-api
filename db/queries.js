const knex = require('./knex');

module.exports = {
  create: (table, object) => knex(table).insert(object).returning(['id', 'email']),
  read: (table, id) => knex(table).where('id', id),
  update: (table, id, object) => knex(table).where('id', id).update(object, 'id'),
  destroy: (table, id) => knex(table).where('id', id).del().returning('id'),
  list: table => knex(table)
};
