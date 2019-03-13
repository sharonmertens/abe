const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  description: String,
  compelete: Boolean
});

const Goals = mongoose.model('Goal', goalSchema);

module.exports = Goals;
