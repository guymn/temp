'use strict';

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'A user must user name'],
    unique: true,
  },
  FristName: { type: String, required: [true, 'A user must first name'] },
  LastName: { type: String, required: [true, 'A user must last name'] },
  password: { type: String, required: [true, 'A user must password'] },
  userID: { type: String, required: [true, 'A user must user ID'] },
});
// "userName": "guy",
// "FristName": "nattawut",
// "LastName": "pandontong",
// "password": "12341234",
// "userID": "3895934657345677457"

const User = mongoose.model('User', usersSchema);

module.exports = User;