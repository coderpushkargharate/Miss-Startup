const mongoose = require('mongoose');

const aiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  }
});

const Ai = mongoose.model('Ai', aiSchema);

module.exports = Ai;
