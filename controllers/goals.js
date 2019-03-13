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
  res.send('index');
});

module.exports = router;
