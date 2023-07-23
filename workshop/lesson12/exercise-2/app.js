'use strict';

const express = require('express');
const tourRoute = require('./tour/tourRoutes');
const userRoute = require('./user/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use(express.static(`${__dirname}/public`));

module.exports = app;