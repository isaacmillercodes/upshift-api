const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('admins')
  .then(admins => {
    res.json(admins);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get admins',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.readExtension('admins', req.params.id)
  .then(admin => {
    res.json(admin[0]);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get admin',
      error: err
    });
  });
});

router.post('/', (req, res) => {
  const user_id = req.body.user_id;

  if (!user_id) {
    res.status(400).json({
      message: 'Please include this admin\'s user id'
    });
  }

  db.readExtension('admins', user_id)
  .then(foundAdmin => {
    res.json({
      message: 'That admin already exists!',
      admin: foundAdmin[0]
    });
  })
  .catch(err => {
    const admin = {
      user_id: user_id
    };

    db.create('admins', admin)
    .then(admin => {
      res.status(201).json({
        message: 'Successfully created admin!',
        admin: admin[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to create admin',
        error: err
      });
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;

  const updatedAdmin = {
    enabled: req.body.enabled
  };

  db.updateExtension('admins', id, updatedAdmin)
  .then(admin => {
    res.json({
      message: 'Successfully updated admin!',
      admin: admin[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update admin',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroyExtension('admins', req.params.id)
  .then(deletedId => {
    res.json({
      message: `Successfully deleted admin with user id of ${deletedId}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete admin',
      error: err
    });
  });
});


module.exports = router;
