const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('votes')
  .then(votes => {
    res.json(votes);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get votes',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('votes', 'id', req.params.id)
  .then(vote => {
    res.json(vote[0]);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get vote',
      error: err
    });
  });
});

router.post('/', (req, res) => {
  const employee_id = req.body.employee_id;
  const role_id = req.body.role_id;
  const shift_id = req.body.shift_id;
  const quantity = req.body.quantity;

  if (!employee_id || !role_id || !shift_id) {
    res.status(400).json({
      message: 'All votes must include IDs for the employee, role, and shift.'
    });
  }

  const vote = {
    employee_id: employee_id,
    role_id: role_id,
    shift_id: shift_id,
    quantity: quantity || 1
  };

  db.create('votes', vote)
  .then(vote => {
    res.status(201).json({
      message: 'Successfully created vote!',
      vote: vote[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create vote',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const employee_id = req.body.employee_id;
  const role_id = req.body.role_id;
  const shift_id = req.body.shift_id;
  const quantity = req.body.quantity;

  db.read('votes', 'id', id)
  .then(foundVote => {

    const updatedVote = {
      employee_id: employee_id || foundVote[0].employee_id,
      role_id: role_id || foundVote[0].role_id,
      shift_id: shift_id || foundVote[0].shift_id,
      quantity: quantity || foundVote[0].quantity
    };

    db.update('votes', 'id', id, updatedVote)
    .then(vote => {
      res.json({
        message: 'Successfully updated vote!',
        vote: vote[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update vote',
        error: err
      });
    });

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update vote',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('votes', 'id', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted vote with an id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete vote',
      error: err
    });
  });
});


module.exports = router;
