const knex = require('./knex');

module.exports = {
  create: (table, object) => knex(table).insert(object).returning('*'),
  read: (table, column, param) => knex(table).where(column, param),
  update: (table, column, param, object) => knex(table).where(column, param).update(object, '*'),
  destroy: (table, column, param) => knex(table).where(column, param).del().returning('*'),
  list: table => knex(table)
};
