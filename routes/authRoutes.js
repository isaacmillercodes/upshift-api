const router = require('express').Router();
const db = require('../db/queries');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let hash = bcrypt.hashSync(password, salt);

  const newUser = {
    email: email,
    password: hash
  };

  db.create('users', newUser)
  .then((createdUser) => {
    console.log(createdUser);
    const token = jwt.sign(createdUser[0], process.env.SECRET_KEY, {
      expiresIn: '10 days' // expires in 10 days
    });
    res.status(201).json({
      success: true,
      message: 'User successfully created and logged in',
      id: createdUser[0].id,
      token: token
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create new user',
      error: err
    });
  });
});

router.post('/login', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    let results = {};
    results.message = 'Must enter both username and password';
    res.status(400).json(results);
  } else {
    db.list('users')
    .then((users) => {
      let user = users.filter((user) => user.email === email)[0];
      if (!user) {
        let results = {};
        results.message = 'Incorrect email or password.';
        res.status(400).json(results);
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: '10 days' // expires in 10 days
          });
          res.json({
            success: true,
            message: 'Successfully logged in!',
            token: token
          });
        } else {
          let results = {};
          results.message = 'Incorrect email or password.';
          res.status(400).json(results);
        }
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to log in',
        error: err
      });
    });
  }
});

module.exports = router;
