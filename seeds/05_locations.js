
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          company_id: knex('companies').where('name', 'Squared Circle Restaurants').select('id'),
          name: 'Raw Paleo Cafe',
          address: '1233 Broadway',
          city: 'Denver',
          state: 'Colorado',
          zip: '80210'
        },
        {
          company_id: knex('companies').where('name', 'Squared Circle Restaurants').select('id'),
          name: 'Smackaroni Grille',
          address: '6106 E. Iliff Ave',
          city: 'Denver',
          state: 'Colorado',
          zip: '80222'
        }
      ]);
    });
};
