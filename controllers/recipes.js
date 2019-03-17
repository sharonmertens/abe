const express = require('express');
const router = express.Router();

const Recipes = require('../models/recipes.js');

// create route
router.post('/', (req, res) => {
  Recipes.create(req.body, (err, createdRecipe) => {
    res.json(createdRecipe);
  });
});

// index route
router.get('/', (req, res) => {
  Recipes.find({}, (err, foundRecipes) => {
    res.json(foundRecipes);
  });
});

// delete route
router.delete('/:id', (req, res) => {
  Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
    res.json(deletedRecipe);
  });
});

// update route
router.put('/:id', (req, res) => {
  Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe) => {
    res.json(updatedRecipe);
  });
});


module.exports = router;
