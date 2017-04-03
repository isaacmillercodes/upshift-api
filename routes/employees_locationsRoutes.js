const router = require('express').Router({mergeParams: true});
const db = require('../db/queries');

router.post('/', (req, res) => {
  const employee_id = req.params.employeeID;
  const location_id = req.params.locationID;

  db.list('employees_locations').where({
    employee_id: employee_id,
    location_id: location_id
  }).then(foundEmployeeLocation => {
    if (foundEmployeeLocation.length) {
      res.status(200).json({
        message: `Employee ${foundEmployeeLocation[0].employee_id} already works at location ${foundEmployeeLocation[0].location_id}`
      });
    } else {

      const newEmployeeLocation = {
        employee_id: employee_id,
        location_id: location_id
      };

      db.create('employees_locations', newEmployeeLocation)
      .then(employeeLocation => {
        res.status(201).json({
          message: `Successfully added employee ${employeeLocation[0].employee_id} to location ${employeeLocation[0].location_id}`,
          employee_location: employeeLocation[0]
        });
      }).catch(err => {
          res.status(400).json({
            message: 'Failed to create employee/location relationship',
            error: err
          });
      });

    }
  }).catch(err => {
      res.status(400).json({
        message: 'Failed to create employee/location relationship',
        error: err
      });
  });

});

router.put('/', (req, res) => {

  const employee_id = req.params.employeeID;
  const location_id = req.params.locationID;

  const newEmployee = req.body.employee_id;
  const newLocation = req.body.location_id;

  const updatedEmployeeLocation = {
    employee_id: newEmployee || employee_id,
    location_id: newLocation || location_id
  };

  db.list('employees_locations').where({
    employee_id: employee_id,
    location_id: location_id
  }).update(updatedEmployeeLocation, '*').then(updatedEmployeeLocation => {
    res.status(200).json({
      message: `Successfully updated employee/location relationship`,
      employee_location: updatedEmployeeLocation[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update employee/location relationship',
      error: err
    });
  });
});

// router.put('/:id', (req, res) => {
//   const id = req.params.id;
//   const email = req.body.email;
//   const first_name = req.body.first_name;
//   const last_name = req.body.last_name;
//   const phone = req.body.phone;
//
//   db.read('employees', 'user_id', req.params.id)
//   .then(foundEmployee => {
//     const updatedEmployee = {
//       email: email || foundEmployee[0].email,
//       first_name: first_name || foundEmployee[0].first_name,
//       last_name: last_name || foundEmployee[0].last_name,
//       phone: phone || foundEmployee[0].phone
//     };
//
//     db.update('employees', 'user_id', id, updatedEmployee)
//     .then(employee => {
//       res.json({
//         message: 'Successfully updated employee!',
//         employee: employee[0]
//       });
//     })
//     .catch((err) => {
//       res.status(400).json({
//         message: 'Failed to update employee',
//         error: err
//       });
//     });
//   })
//   .catch((err) => {
//     res.status(400).json({
//       message: 'Failed to update employee',
//       error: err
//     });
//   });
//
// });

router.delete('/', (req, res) => {

  const employee_id = req.params.employeeID;
  const location_id = req.params.locationID;

  db.list('employees_locations').where({
    employee_id: employee_id,
    location_id: location_id
  }).del().returning('*').then(deletedEmployeeLocation => {
    res.status(200).json({
      message: `Successfully deleted employee/location relationship`,
      employee_location: deletedEmployeeLocation[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete employee/location relationship',
      error: err
    });
  });
});


module.exports = router;
