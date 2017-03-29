const router = require('express').Router();
const db = require('../db/queries');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
// const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  db.list('users')
  .then(users => {
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  db.read('users', req.params.id)
  .then(users => {
    res.json(users);
  });
});

router.put('/:id', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const hash = bcrypt.hashSync(password, salt);

  const updatedUser = {
    email: email,
    password: hash
  };

  db.update('users', req.params.id, updatedUser)
  .then(user => {
    res.json({
      message: 'Successfully updated user!',
      user: user[0]
    });
  })
  .catch((err) => {
    res.status(400).send({
      status: 'Failed to update user',
      message: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('users', req.params.id)
  .then(deletedId => {
    res.json({
      message: `Successfully deleted user with id ${deletedId}`
    });
  })
  .catch((err) => {
    res.status(400).send({
      status: 'Failed to delete user',
      message: err
    });
  });
});


module.exports = router;
