const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('employees')
  .then(employees => {
    res.json(employees);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get employees',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('employees', 'user_id', req.params.id)
  .then(employee => {
    const foundEmployee = employee[0];
    foundEmployee.locations = `/employees/${foundEmployee.user_id}/locations`;
    res.json(foundEmployee);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get employee',
      error: err
    });
  });
});

router.get('/:id/locations', (req, res) => {
  db.read('employees_locations', 'employee_id', req.params.id)
  .join('locations', 'employees_locations.location_id', '=', 'locations.id')
  .select('locations.name as location_name', 'locations.id as location_id')
  .then(employees => {
    res.json(employees);
  });
});

router.post('/', (req, res) => {
  const user_id = req.body.user_id;
  const email = req.body.email;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone = req.body.phone;

  if (!user_id) {
    res.status(400).json({
      message: 'Please include this employee\'s user id'
    });
  }

  const newEmployee = {
    user_id: user_id,
    email: email,
    first_name: first_name,
    last_name: last_name,
    phone: phone
  };

  db.create('employees', newEmployee)
  .then(employee => {
    res.status(201).json({
      message: 'Successfully created employee!',
      employee: employee[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create employee',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const email = req.body.email;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone = req.body.phone;

  db.read('employees', 'user_id', req.params.id)
  .then(foundEmployee => {
    const updatedEmployee = {
      email: email || foundEmployee[0].email,
      first_name: first_name || foundEmployee[0].first_name,
      last_name: last_name || foundEmployee[0].last_name,
      phone: phone || foundEmployee[0].phone
    };

    db.update('employees', 'user_id', id, updatedEmployee)
    .then(employee => {
      res.json({
        message: 'Successfully updated employee!',
        employee: employee[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update employee',
        error: err
      });
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update employee',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('employees', 'user_id', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted employee with user id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete employee',
      error: err
    });
  });
});


module.exports = router;
