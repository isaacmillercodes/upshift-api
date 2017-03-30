const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('schedules')
  .then(schedules => {
    res.json(schedules);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get schedules',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('schedules', 'id', req.params.id)
  .then(schedule => {
    res.json(schedule[0]);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get schedule',
      error: err
    });
  });
});

router.post('/', (req, res) => {
  const location_id = req.body.location_id;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const votes_available = req.body.votes_available;

  if (!location_id) {
    res.status(400).json({
      message: 'Please include the location id for this schedule'
    });
  }

  const schedule = {
    location_id: location_id,
    start_date: start_date,
    end_date: end_date,
    votes_available: votes_available || 10
  };

  db.create('schedules', schedule)
  .then(schedule => {
    res.status(201).json({
      message: 'Successfully created schedule!',
      schedule: schedule[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create schedule',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const location_id = req.body.company_id;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const votes_available = req.body.votes_available;

  db.read('schedules', 'id', id)
  .then(foundSchedule => {

    const updatedSchedule = {
      location_id: location_id || foundSchedule[0].location_id,
      start_date: start_date || foundSchedule[0].start_date,
      end_date: end_date || foundSchedule[0].end_date,
      votes_available: votes_available || foundSchedule[0].votes_available
    };

    db.update('schedules', 'id', id, updatedSchedule)
    .then(schedule => {
      res.json({
        message: 'Successfully updated schedule!',
        schedule: schedule[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update schedule',
        error: err
      });
    });

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update schedule',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('schedules', 'id', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted schedule with an id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete schedule',
      error: err
    });
  });
});


module.exports = router;
