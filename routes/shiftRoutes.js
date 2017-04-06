const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('shifts')
  .then(shifts => {
    res.json(shifts);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get shifts',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('shifts', 'id', req.params.id)
  .then(shift => {
    const foundShift = shift[0];
    foundShift.roles = `/shifts/${foundShift.id}/roles`;
    res.json(foundShift);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get shift',
      error: err
    });
  });
});

router.get('/:id/roles', (req, res) => {
  db.read('roles_shifts', 'roles_shifts.shift_id', req.params.id)
  .join('roles', 'roles_shifts.role_id', '=', 'roles.id')
  .select('roles.id as role_id', 'roles.title', 'roles_shifts.quantity')
  .then(roles => {
    res.json(roles);
  });
});

router.post('/', (req, res) => {
  const schedule_id = req.body.schedule_id;
  const date = req.body.date;
  const start_time = req.body.start_time;
  const end_time = req.body.end_time;
  const name = req.body.name;

  if (!schedule_id) {
    res.status(400).json({
      message: 'Please include the schedule id for this shift'
    });
  }

  const shift = {
    schedule_id: schedule_id,
    date: date,
    start_time: start_time,
    end_time: end_time,
    name: name
  };

  db.create('shifts', shift)
  .then(shift => {
    res.status(201).json({
      message: 'Successfully created shift!',
      shift: shift[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create shift',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const schedule_id = req.body.schedule_id;
  const date = req.body.date;
  const start_time = req.body.start_time;
  const end_time = req.body.end_time;
  const name = req.body.name;

  db.read('shifts', 'id', id)
  .then(foundShift => {

    const updatedShift = {
      schedule_id: schedule_id || foundShift[0].schedule_id,
      date: date || foundShift[0].date,
      start_time: start_time || foundShift[0].start_time,
      end_time: end_time || foundShift[0].end_time,
      name: name || foundShift[0].name
    };

    db.update('shifts', 'id', id, updatedShift)
    .then(shift => {
      res.json({
        message: 'Successfully updated shift!',
        shift: shift[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update shift',
        error: err
      });
    });

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update shift',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('shifts', 'id', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted shift with an id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete shift',
      error: err
    });
  });
});

module.exports = router;
