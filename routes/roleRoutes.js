const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('roles')
  .then(roles => {
    res.json(roles);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get roles',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('roles', 'id', req.params.id)
  .then(role => {
    const foundRole = role[0];
    foundRole.shifts = `/roles/${foundRole.id}/shifts`;
    res.json(foundRole);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get role',
      error: err
    });
  });
});

router.get('/:id/shifts', (req, res) => {
  db.read('roles_shifts', 'roles_shifts.role_id', req.params.id)
  .join('shifts', 'roles_shifts.shift_id', '=', 'shifts.id')
  .select('shifts.id as shift_id', 'shifts.name', 'shifts.date', 'shifts.start_time', 'shifts.end_time')
  .then(shifts => {
    res.json(shifts);
  });
});

router.post('/', (req, res) => {
  const title = req.body.title;

  const role = {
    title: title
  };

  db.create('roles', role)
  .then(role => {
    res.status(201).json({
      message: 'Successfully created role!',
      role: role[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create role',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const title = req.body.title;

  db.read('roles', 'id', id)
  .then(foundRole => {

    const updatedRole = {
      title: title || foundRole[0].title
    };

    db.update('roles', 'id', id, updatedRole)
    .then(role => {
      res.json({
        message: 'Successfully updated role!',
        role: role[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update role',
        error: err
      });
    });

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update role',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('roles', 'id', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted role with an id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete role',
      error: err
    });
  });
});


module.exports = router;
