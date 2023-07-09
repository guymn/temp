'use strict';

const express = require('express');
const userRoute = require('./user/userRoutes');
const { escape } = require('querystring');

const app = express();
app.use(express.json());
app.use('/api/v1/user', userRoute);
app.use(express.static(`${__dirname}/public`));

module.exports = app;
