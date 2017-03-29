
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {user_id: knex('users').where('email', 'vince@mcmahon.com').select('id')}
      ]);
    });
};
