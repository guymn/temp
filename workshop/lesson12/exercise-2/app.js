'use strict';

const express = require('express');
const tourRoute = require('./tour/tourRoutes');
const userRoute = require('./user/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use(express.static(`${__dirname}/public`));

app.post('/users', async (req, res) => {
  const { userName, FristName, LastName, password } = req.body;

  try {
    if (!userName) {
      return res.status(400).json({ error: 'A user must have user name' });
    }

    if (!password || password.length < 8 || /\s/.test(password)) {
      return res.status(400).json({
        error: 'The password must have 8 or more characters and no spaces',
      });
    }

    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: 'This username is duplicate' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app;
