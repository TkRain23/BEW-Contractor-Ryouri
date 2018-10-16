// review.js

const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String,
  difficulty: String
});

module.exports = Review
