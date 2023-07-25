'use strict';

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'A user must have user name'],
    unique: [true, 'This username is duplicate'],
  },
  FristName: { type: String, required: [true, 'A user must have first name'] },
  LastName: { type: String, required: [true, 'A user must have last name'] },
  password: { type: String, required: [true, 'A user must have password'] },
});
// "userName": "guy",
// "FristName": "nattawut",
// "LastName": "pandontong",
// "password": "12341234",

const User = mongoose.model('User', usersSchema);

module.exports = User;