const knex = require('./knex');

module.exports = {
  create: (table, object) => knex(table).insert(object).returning('*'),
  read: (table, id) => knex(table).where('id', id),
  update: (table, id, object) => knex(table).where('id', id).update(object, '*'),
  destroy: (table, id) => knex(table).where('id', id).del().returning('id'),
  list: table => knex(table)
};
