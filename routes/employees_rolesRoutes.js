const router = require('express').Router({mergeParams: true});
const db = require('../db/queries');

router.post('/', (req, res) => {
  const employee_id = req.params.employeeID;
  const role_id = req.params.roleID;

  db.list('employees_roles').where({
    employee_id: employee_id,
    role_id: role_id
  }).then(foundEmployeeRole => {
    if (foundEmployeeRole.length) {
      res.status(200).json({
        message: `Employee ${foundEmployeeRole[0].employee_id} already has the role ${foundEmployeeRole[0].role_id}`
      });
    } else {

      const newEmployeeRole = {
        employee_id: employee_id,
        role_id: role_id
      };

      db.create('employees_roles', newEmployeeRole)
      .then(employeeRole => {
        res.status(201).json({
          message: `Successfully added employee ${employeeRole[0].employee_id} to role ${employeeRole[0].role_id}`,
          employee_role: employeeRole[0]
        });
      }).catch(err => {
          res.status(400).json({
            message: 'Failed to create employee/role relationship',
            error: err
          });
      });

    }
  }).catch(err => {
      res.status(400).json({
        message: 'Failed to create employee/role relationship',
        error: err
      });
  });

});

router.put('/', (req, res) => {

  const employee_id = req.params.employeeID;
  const role_id = req.params.roleID;

  const newEmployee = req.body.employee_id;
  const newRole = req.body.role_id;

  const updatedEmployeeRole = {
    employee_id: newEmployee || employee_id,
    role_id: newRole || role_id
  };

  db.list('employees_roles').where({
    employee_id: employee_id,
    role_id: role_id
  }).update(updatedEmployeeRole, '*').then(updatedEmployeeRole => {
    res.status(200).json({
      message: `Successfully updated employee/role relationship`,
      employee_role: updatedEmployeeRole[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update employee/role relationship',
      error: err
    });
  });
});

router.delete('/', (req, res) => {

  const employee_id = req.params.employeeID;
  const role_id = req.params.roleID;

  db.list('employees_roles').where({
    employee_id: employee_id,
    role_id: role_id
  }).del().returning('*').then(deletedEmployeeRole => {
    res.status(200).json({
      message: `Successfully deleted employee/role relationship`,
      employee_role: deletedEmployeeRole[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete employee/role relationship',
      error: err
    });
  });
});

module.exports = router;
