const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: Number
  },
  dateOfEvent: {
    type: String
  },
  notes: {
    type: String
  },
  rating: {
    type: String
  },
});

module.exports = mongoose.model('Event', schema);
