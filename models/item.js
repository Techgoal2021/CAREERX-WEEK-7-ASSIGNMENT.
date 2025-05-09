const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  locationFound: {
    type: String,
    required: true
  },
  dateFound: {
    type: Date,
    default: Date.now
  },
  claimed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Item', itemSchema);
