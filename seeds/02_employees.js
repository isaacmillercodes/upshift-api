
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          user_id: knex('users').where('email', 'shane@mcmahon.com').select('id'),
          email: 'shane@mcmahon.com',
          first_name: 'Shane',
          last_name: 'McMahon',
          phone: '303-249-8723'
        },
        {
          user_id: knex('users').where('email', 'stephanie@mcmahon.com').select('id'),
          email: 'stephanie@mcmahon.com',
          first_name: 'Stephanie',
          last_name: 'McMahon',
          phone: '303-482-3129'
        },
        {
          user_id: knex('users').where('email', 'dwayne@johnson.com').select('id'),
          email: 'dwayne@johnson.com',
          first_name: 'Dwayne',
          last_name: 'Johnson',
          phone: '303-382-1248'
        },
        {
          user_id: knex('users').where('email', 'steve@austin.com').select('id'),
          email: 'steve@austin.com',
          first_name: 'Steve',
          last_name: 'Austin',
          phone: '303-621-0932'
        },
        {
          user_id: knex('users').where('email', 'mick@foley.com').select('id'),
          email: 'mick@foley.com',
          first_name: 'Mick',
          last_name: 'Foley',
          phone: '303-528-9428'
        },
        {
          user_id: knex('users').where('email', 'randy@savage.com').select('id'),
          email: 'randy@savage.com',
          first_name: 'Randy',
          last_name: 'Savage',
          phone: '303-389-2187'
        },
        {
          user_id: knex('users').where('email', 'sasha@banks.com').select('id'),
          email: 'sasha@banks.com',
          first_name: 'Sasha',
          last_name: 'Banks',
          phone: '303-271-9038'
        },
        {
          user_id: knex('users').where('email', 'charlotte@flair.com').select('id'),
          email: 'charlotte@flair.com',
          first_name: 'Charlotte',
          last_name: 'Flair',
          phone: '303-342-4217'
        },
        {
          user_id: knex('users').where('email', 'kevin@owens.com').select('id'),
          email: 'kevin@owens.com',
          first_name: 'Kevin',
          last_name: 'Owens',
          phone: '303-489-6273'
        },
        {
          user_id: knex('users').where('email', 'finn@balor.com').select('id'),
          email: 'finn@balor.com',
          first_name: 'Finn',
          last_name: 'Balor',
          phone: '303-982-2184'
        },
        {
          user_id: knex('users').where('email', 'shinsuke@nakamura.com').select('id'),
          email: 'shinsuke@nakamura.com',
          first_name: 'Shinsuke',
          last_name: 'Nakamura',
          phone: '303-582-9654'
        },
        {
          user_id: knex('users').where('email', 'triple@h.com').select('id'),
          email: 'triple@h.com',
          first_name: 'Hunter',
          last_name: 'Helmsley',
          phone: '303-356-0873'
        },
        {
          user_id: knex('users').where('email', 'brock@lesnar.com').select('id'),
          email: 'brock@lesnar.com',
          first_name: 'Brock',
          last_name: 'Lesnar',
          phone: '303-423-8390'
        },
        {
          user_id: knex('users').where('email', 'chris@jericho.com').select('id'),
          email: 'chris@jericho.com',
          first_name: 'Chris',
          last_name: 'Jericho',
          phone: '303-624-4901'
        },
        {
          user_id: knex('users').where('email', 'bray@wyatt.com').select('id'),
          email: 'bray@wyatt.com',
          first_name: 'Bray',
          last_name: 'Wyatt',
          phone: '303-462-8437'
        },
        {
          user_id: knex('users').where('email', 'trish@stratus.com').select('id'),
          email: 'trish@stratus.com',
          first_name: 'Trish',
          last_name: 'Stratus',
          phone: '303-840-3275'
        },
        {
          user_id: knex('users').where('email', 'becky@lynch.com').select('id'),
          email: 'becky@lynch.com',
          first_name: 'Becky',
          last_name: 'Lynch',
          phone: '303-402-5420'
        },
        {
          user_id: knex('users').where('email', 'aj@styles.com').select('id'),
          email: 'aj@styles.com',
          first_name: 'AJ',
          last_name: 'Styles',
          phone: '303-386-9485'
        },
        {
          user_id: knex('users').where('email', 'john@cena.com').select('id'),
          email: 'john@cena.com',
          first_name: 'John',
          last_name: 'Cena',
          phone: '303-530-8301'
        },
        {
          user_id: knex('users').where('email', 'shawn@michaels.com').select('id'),
          email: 'shawn@michaels.com',
          first_name: 'Shawn',
          last_name: 'Michaels',
          phone: '303-429-6179'
        },
        {
          user_id: knex('users').where('email', 'dean@ambrose.com').select('id'),
          email: 'dean@ambrose.com',
          first_name: 'Dean',
          last_name: 'Ambrose',
          phone: '303-280-4290'
        },
        {
          user_id: knex('users').where('email', 'kurt@angle.com').select('id'),
          email: 'kurt@angle.com',
          first_name: 'Kurt',
          last_name: 'Angle',
          phone: '303-212-4023'
        },
        {
          user_id: knex('users').where('email', 'seth@rollins').select('id'),
          email: 'seth@rollins',
          first_name: 'Seth',
          last_name: 'Rollins',
          phone: '303-523-1184'
        },
        {
          user_id: knex('users').where('email', 'sami@zayn.com').select('id'),
          email: 'sami@zayn.com',
          first_name: 'Sami',
          last_name: 'Zayn',
          phone: '303-684-3275'
        },
        {
          user_id: knex('users').where('email', 'daniel@bryan.com').select('id'),
          email: 'daniel@bryan.com',
          first_name: 'Daniel',
          last_name: 'Bryan',
          phone: '303-820-4021'
        },
      ]);
    });
};
