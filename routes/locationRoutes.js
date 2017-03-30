const router = require('express').Router();
const db = require('../db/queries');

router.get('/', (req, res) => {
  db.list('locations')
  .then(locations => {
    res.json(locations);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get locations',
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  db.read('locations', 'id', req.params.id)
  .then(location => {
    const foundLocation = location[0];
    foundLocation.employees = `/locations/${foundLocation.id}/employees`;
    res.json(foundLocation);
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to get location',
      error: err
    });
  });
});

router.get('/:id/employees', (req, res) => {
  db.read('employees_locations', 'location_id', req.params.id)
  .join('employees', 'employees_locations.employee_id', '=', 'employees.user_id')
  .select('employees.user_id as employee_id')
  .select('employees.first_name', 'employees.last_name')
  .then(employees => {
    res.json(employees);
  });
});

router.post('/', (req, res) => {
  const company_id = req.body.company_id;
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;

  if (!company_id) {
    res.status(400).json({
      message: 'Please include the company id for this location'
    });
  }

  const location = {
    company_id: company_id,
    name: name,
    address: address,
    city: city,
    state: state,
    zip: zip
  };

  db.create('locations', location)
  .then(location => {
    res.status(201).json({
      message: 'Successfully created location!',
      location: location[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to create location',
      error: err
    });
  });

});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const company_id = req.body.company_id;
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;

  db.read('locations', 'id', id)
  .then(foundLocation => {

    const updatedLocation = {
      company_id: company_id || foundLocation[0].company_id,
      name: name || foundLocation[0].name,
      address: address || foundLocation[0].address,
      city: city || foundLocation[0].city,
      state: state || foundLocation[0].state,
      zip: zip || foundLocation[0].zip,
    };

    db.update('locations', 'id', id, updatedLocation)
    .then(location => {
      res.json({
        message: 'Successfully updated location!',
        location: location[0]
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: 'Failed to update location',
        error: err
      });
    });

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update location',
      error: err
    });
  });

});

router.delete('/:id', (req, res) => {
  db.destroy('locations', 'id', req.params.id)
  .then(deleted => {
    res.json({
      message: `Successfully deleted location with an id of ${deleted[0].id}`
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete location',
      error: err
    });
  });
});


module.exports = router;
