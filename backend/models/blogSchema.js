const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  date: Date,
  readTime: String,
});

module.exports = mongoose.model('Blog', blogSchema);
