const router = require('express').Router({mergeParams: true});
const db = require('../db/queries');

router.post('/', (req, res) => {
  const role_id = req.params.roleID;
  const shift_id = req.params.shiftID;
  const quantity = req.body.quantity;

  db.list('roles_shifts').where({
    role_id: role_id,
    shift_id: shift_id,
  }).then(foundRoleShift => {
    if (foundRoleShift.length) {
      res.status(200).json({
        message: `Shift ${foundRoleShift[0].shift_id} already has the role of ${foundRoleShift[0].role_id}`
      });
    } else {
      const newRoleShift = {
        role_id: role_id,
        shift_id: shift_id,
        quantity: quantity
      };

      db.create('roles_shifts', newRoleShift)
      .then(roleShift => {
        res.status(201).json({
          message: `Successfully added role ${roleShift[0].role_id} to shift ${roleShift[0].shift_id} requiring a quantity of ${roleShift[0].quantity}`,
          role_shift: roleShift[0]
        });
      }).catch(err => {
        res.status(400).json({
          message: 'Failed to create role/shift relationship',
          error: err
        });
      });

    }
  }).catch(err => {
      res.status(400).json({
        message: 'Failed to create role/shift relationship',
        error: err
      });
  });

});

router.put('/', (req, res) => {

  const role_id = req.params.roleID;
  const shift_id = req.params.shiftID;
  const quantity = req.query.quantity;

  const newRole = req.body.role_id;
  const newShift = req.body.shift_id;
  const newDate = req.body.quantity;

  const updatedRoleShift = {
    role_id: newRole || role_id,
    shift_id: newShift || shift_id,
    quantity: newDate || quantity
  };

  db.list('roles_shifts').where({
    role_id: role_id,
    shift_id: shift_id,
    quantity: quantity
  }).update(updatedRoleShift, '*').then(updatedRoleShift => {
    res.status(200).json({
      message: `Successfully updated role/shift relationship`,
      role_shift: updatedRoleShift[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update role/shift relationship',
      error: err
    });
  });
});

router.delete('/', (req, res) => {

  const role_id = req.params.roleID;
  const shift_id = req.params.shiftID;

  db.list('roles_shifts').where({
    role_id: role_id,
    shift_id: shift_id
  }).del().returning('*').then(deletedRoleShift => {
    res.status(200).json({
      message: `Successfully deleted role/shift relationship`,
      role_shift: deletedRoleShift[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete role/shift relationship',
      error: err
    });
  });
});

module.exports = router;
