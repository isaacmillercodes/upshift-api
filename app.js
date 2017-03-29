const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use('/auth', authRoutes);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
