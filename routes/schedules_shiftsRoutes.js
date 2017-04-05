const router = require('express').Router({mergeParams: true});
const db = require('../db/queries');

router.post('/', (req, res) => {
  const schedule_id = req.params.scheduleID;
  const shift_id = req.params.shiftID;
  const date = req.body.date;

  db.list('schedules_shifts').where({
    schedule_id: schedule_id,
    shift_id: shift_id,
    date: date
  }).then(foundScheduleShift => {
    if (foundScheduleShift.length) {
      res.status(200).json({
        message: `Schedule ${foundScheduleShift[0].schedule_id} already has the shift ${foundScheduleShift[0].shift_id} on ${foundScheduleShift[0].date}`
      });
    } else {
      const newScheduleShift = {
        schedule_id: schedule_id,
        shift_id: shift_id,
        date: date
      };

      db.create('schedules_shifts', newScheduleShift)
      .then(scheduleShift => {
        res.status(201).json({
          message: `Successfully added shift ${scheduleShift[0].shift_id} on ${scheduleShift[0].date} to schedule ${scheduleShift[0].schedule_id}`,
          schedule_shift: scheduleShift[0]
        });
      }).catch(err => {
        res.status(400).json({
          message: 'Failed to create schedule/shift relationship',
          error: err
        });
      });

    }
  }).catch(err => {
      res.status(400).json({
        message: 'Failed to create schedule/shift relationship',
        error: err
      });
  });

});

router.put('/', (req, res) => {

  if (!req.body.date) {
    res.status(400).json({
      message: 'Please include a date for this request.',
    });
  }

  const schedule_id = req.params.scheduleID;
  const shift_id = req.params.shiftID;

  const newSchedule = req.body.schedule_id;
  const newShift = req.body.shift_id;
  const newDate = req.body.date;

  const updatedScheduleShift = {
    schedule_id: newSchedule || schedule_id,
    shift_id: newShift || shift_id,
    date: newDate
  };

  db.list('schedules_shifts').where({
    schedule_id: schedule_id,
    shift_id: shift_id,
    date: newDate
  }).update(updatedScheduleShift, '*').then(updatedScheduleShift => {
    res.status(200).json({
      message: `Successfully updated schedule/shift relationship`,
      schedule_shift: updatedScheduleShift[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to update schedule/shift relationship',
      error: err
    });
  });
});

router.delete('/', (req, res) => {

  if (!req.body.date) {
    res.status(400).json({
      message: 'Please include a date for this request.',
    });
  }

  const schedule_id = req.params.scheduleID;
  const shift_id = req.params.shiftID;
  const date = req.body.date;

  db.list('schedules_shifts').where({
    schedule_id: schedule_id,
    shift_id: shift_id,
    date: date
  }).del().returning('*').then(deletedScheduleShift => {
    res.status(200).json({
      message: `Successfully deleted schedule/shift relationship`,
      schedule_shift: deletedScheduleShift[0]
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: 'Failed to delete schedule/shift relationship',
      error: err
    });
  });
});

module.exports = router;
