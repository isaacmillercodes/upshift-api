const router = require('express').Router();
const db = require('../db/queries');
// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);
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


module.exports = router;
