const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  directions: String
});

const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipes;
