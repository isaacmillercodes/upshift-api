
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          owner_id: knex('users').where('email', 'vince@mcmahon.com').select('id'),
          name: 'Squared Circle Restaurants',
          industry: 'Restaurant'
        }
      ]);
    });
};
