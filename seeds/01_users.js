
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'vince@mcmahon.com',
          password: '$2a$06$uadMvAWv/CuyisavBs0L2Ow4SkiAdDMIRWMy2w6yJAVDEFsZomwNq'
        },
        {
          email: 'shane@mcmahon.com',
          password: '$2a$06$aGp8wEcapW2IGAIn.SGRwOdl7sstZb4oQW43Tk4/s/S7GXBk5odEK'
        },
        {
          email: 'stephanie@mcmahon.com',
          password: '$2a$06$x9fe4Nt2WKc2YV8uryCZ8ud7q3SruxFkmUr/LINrwa8v9VstpRcJK'
        },
        {
          email: 'dwayne@johnson.com',
          password: '$2a$06$JG48Fo4ScZkQpRDolz/WmO/SvCgP9CE2pVTS/jB3jjwOF6qXOaDo.'
        },
        {
          email: 'steve@austin.com',
          password: '$2a$06$LsYJQ.wCCV/eb24Iz/rM.OFu1zL63KXZbD4GukUXICEU5MDf7M9V6'
        },
        {
          email: 'mick@foley.com',
          password: '$2a$06$NBOfXLkw340Uo5J60Hy5VOxymiF749L/klSJf6kkfkaqYOxyBCHyy'
        },
        {
          email: 'randy@savage.com',
          password: '$2a$06$4iUjS9hUK4DRljgR4EfI9.Jp1qqcXV1OjgBzlELz/AFS0tdsLR18S'
        },
        {
          email: 'sasha@banks.com',
          password: '$2a$06$0JpohJ20Ykt.ZtFPo96TAOGyXVbVePXs59gG9aFKlDvQSckcQU5Ii'
        },
        {
          email: 'charlotte@flair.com',
          password: '$2a$06$tbwr182bN9lpeO1XX40bDuOyTkbYIIDS0d5CZrq40y0SBMd.uDzya'
        },
        {
          email: 'kevin@owens.com',
          password: '$2a$06$8MKLe1x9MzFADzOaHvpJqOtyNu.gnYpdZZ9A/JJue/slqAklNd7ze'
        },
        {
          email: 'finn@balor.com',
          password: '$2a$06$QD0z5jxOqnTr0OoIYSzxeucebQinw/q9i6A7t0qY01878ADhRnkZi'
        },
        {
          email: 'shinsuke@nakamura.com',
          password: '$2a$06$.6rywIH9Nws0r.2vDpsq9u.XCdbLylyQ1y51rJo4oloie.P98aCDq'
        },
        {
          email: 'triple@h.com',
          password: '$2a$06$LeWKF/mHh.zH1eFECZ9ms.PNeDUDJEBM/BJGHN2mN3crxdxJOASxa'
        },
        {
          email: 'brock@lesnar.com',
          password: '$2a$06$8QIQwYNq4Z5qNEV6DMzJTecrORxoXEiZGeRrESGBlKN.0yaZW7K.6'
        },
        {
          email: 'chris@jericho.com',
          password: '$2a$06$slTVS8tzsLhbke.YI4JtXOOXyHqE.hDnY2p4g/ipud2oNI5MUPuSC'
        },
        {
          email: 'bray@wyatt.com',
          password: '$2a$06$hKqv04a/aZs3hYqLhFlRSe1x01x7C67kGn5QNmSB9BPAmYDcr.fzC'
        },
        {
          email: 'trish@stratus.com',
          password: '$2a$06$JPuKqNw/oiIUAM7tHyZGFuyEN9z7CfWLSIPEyj1Gde9Oq/ZNSOlMi'
        },
        {
          email: 'becky@lynch.com',
          password: '$2a$06$s8XE/0pT81P1hD5R6RnYgOsoyCBaykLU/FD96h7ISYsOVBRwMCnIq'
        },
        {
          email: 'aj@styles.com',
          password: '$2a$06$7Dy7WndFOJkTMzrEJH8lEORunIMdR499udUkqrMwS2o992hwlAt06'
        },
        {
          email: 'john@cena.com',
          password: '$2a$06$/w/fY4./TV53ET16jo/V0OH57Bpgcpjlv9WwUJUF96.v83nrxddOq'
        },
        {
          email: 'shawn@michaels.com',
          password: '$2a$06$Q49vBSf9xu9qm.hTnwrwLeGZiKFwjwudOGKEfDu/P1eFWm7KqoIpW'
        },
        {
          email: 'dean@ambrose.com',
          password: '$2a$06$k7nCEfGT366LX7zUBAduWeu35vuvemkoWlNS0IU6N.jR4r3Yix8Yu'
        },
        {
          email: 'kurt@angle.com',
          password: '$2a$06$0jX10D1jI/egr9KbAcPWteqL7rscVmHMU1w4ryuDFfejsA748VNIi'
        },
        {
          email: 'seth@rollins.com',
          password: '$2a$06$ItSR.Q6mP/6Dvaf573Zo/.NO5hupNg6lfb8jFnIhU6XjTvjlidiv.'
        },
        {
          email: 'sami@zayn.com',
          password: '$2a$06$uKzFD/unyjwFJwWoRFRjFeobP82M.3Ta2Xa5nJXmZdTDtVFRiHbXa'
        },
        {
          email: 'daniel@bryan.com',
          password: '$2y$10$i8308i80IYkB/6Ot/smbGOZQvXvaUoLpEV8vhJxogZqigljeTVNIK'
        }
      ]);
    });
};
