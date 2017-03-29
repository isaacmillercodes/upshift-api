
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {title: 'Schedule Admin'},
        {title: 'Bartender'},
        {title: 'Server'},
        {title: 'Host'},
        {title: 'Manager'},
        {title: 'Head Chef'},
        {title: 'Line Cook'}
      ]);
    });
};
