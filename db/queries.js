const knex = require('./knex');

module.exports = {
  create: (table, object) => knex(table).insert(object).returning('*'),
  read: (table, id) => knex(table).where('id', id),
  readExtension: (table, id) => knex(table).where('user_id', id),
  update: (table, id, object) => knex(table).where('id', id).update(object, '*'),
  updateExtension: (table, id, object) => knex(table).where('user_id', id).update(object, '*'),
  destroy: (table, id) => knex(table).where('id', id).del().returning('id'),
  destroyExtension: (table, id) => knex(table).where('user_id', id).del().returning('user_id'),
  list: table => knex(table)
};
