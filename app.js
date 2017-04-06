const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const authRoutes = require('./routes/authRoutes');
const users = require('./routes/userRoutes');
const employees = require('./routes/employeeRoutes');
const admins = require('./routes/adminRoutes');
const companies = require('./routes/companyRoutes');
const locations = require('./routes/locationRoutes');
const schedules = require('./routes/scheduleRoutes');
const shifts = require('./routes/shiftRoutes');
const roles = require('./routes/roleRoutes');
const votes = require('./routes/voteRoutes');
const employees_locations = require('./routes/employees_locationsRoutes');
const employees_roles = require('./routes/employees_rolesRoutes');
const roles_shifts = require('./routes/roles_shiftsRoutes');
const schedules_shifts = require('./routes/schedules_shiftsRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use('/auth', authRoutes);

// app.use((req, res, next) => {
//   const fullToken = req.headers.authorization.split(" ");
//   const token = fullToken[1];
//
//   if (token) {
//     jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.status(403).send({
//         success: false,
//         message: 'No token provided.'
//     });
//   }
// });

app.use('/users', users);
app.use('/employees', employees);
app.use('/employees/:employeeID/locations/:locationID', employees_locations);
app.use('/employees/:employeeID/roles/:roleID', employees_roles);
app.use('/admins', admins);
app.use('/companies', companies);
app.use('/locations', locations);
app.use('/schedules', schedules);
app.use('/schedules/:scheduleID/shifts/:shiftID', schedules_shifts);
app.use('/shifts', shifts);
app.use('/roles', roles);
app.use('/roles/:roleID/shifts/:shiftID', roles_shifts);
app.use('/votes', votes);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
