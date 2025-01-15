const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  category: [String],
  level: String,
  title: String,
  price: String,
  author: String,
  rating: Number,
  image: String,
});

module.exports = mongoose.model("Course", courseSchema);
