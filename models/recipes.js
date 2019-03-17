const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  description: String,
  ingredients: String
});

const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipes;
