const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
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
  author: {
    type: String,
    required: true
  }
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
