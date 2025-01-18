const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String },
  price: { type: Number },
  author: { type: String },
  rating: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("Course", courseSchema);
