'use strict';

const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      message: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { userName, FristName, LastName, password } = req.body;

    // Check if the userName is provided
    if (!userName) {
      return res.status(400).json({ error: 'A user must have a user name' });
    }

    // Check if the password is provided, has more than 8 characters, and contains no spaces
    if (!password || password.length < 8) {
      return res.status(400).json({
        error: 'The password must have 8 or more characters.',
      });
    }
    if (/\s/.test(password)) {
      return res.status(400).json({
        error: 'The password must not have spaces.',
      });
    }

    // Check if a user with the same userName already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ error: 'This username is duplicate.' });
    }

    // Create a new user
    const newUser = new User({ userName, FristName, LastName, password });
    await newUser.save();

    res.status(201).json({
      status: 'Success',
      message: newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'Success',
      message: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err,
    });
  }
};
