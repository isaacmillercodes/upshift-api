const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/authRoutes');
const users = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use('/auth', authRoutes);

app.use((req, res, next) => {
  const fullToken = req.headers.authorization.split(" ");
  const token = fullToken[1];

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});

app.use('/users', users);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
