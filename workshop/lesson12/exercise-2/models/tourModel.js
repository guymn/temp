'use strict';

const mongoose = require('mongoose');

const toursSchema = mongoose.Schema({
  id: { type: Number, default: 0 },
  name: {
    type: String,
    required: [true, 'A tour must name a name'],
    unique: true,
  },
  duration: { type: Number, default: 0 },
  maxGroupSize: { type: Number, default: 0 },
  difficulty: { type: String, default: "--" },
  ratingsAverage: { type: Number, default: 0.0 },
  ratingsQuantity: { type: Number, default: 0 },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, 'A tour must price'] },
  summary: { type: String, default: "--" },
  description: { type: String, default: "--" },
  imageCover: { type: String, default: './img/img.png' },
  images: { type: Array, default: ['./img/img2.png', './img/img3.png'] },
  startDates: { type: Array, default: ["0000-00-00, 00:00"] },
});

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;
