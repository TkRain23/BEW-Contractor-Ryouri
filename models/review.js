// review.js

const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  recipeTitle: String,
  servingSize: String,
  difficulty: String
});

module.exports = Review
