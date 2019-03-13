const express = require('express');
const router = express.Router();

const Goals = require('../models/goals.js');

// create route
router.post('/', (req, res) => {
  Goals.create(req.body, (err, createdGoal) => {
    res.json(createdGoal);
  });
});

// index route
router.get('/', (req, res) => {
  Goals.find({}, (err, foundGoals) => {
    res.json(foundGoals);
  });
});

// delete route
router.delete('/:id', (req, res) => {
  Goals.findByIdAndRemove(req.params.id, (err, deletedGoal) => {
    res.json(deletedGoal);
  });
});



module.exports = router;
