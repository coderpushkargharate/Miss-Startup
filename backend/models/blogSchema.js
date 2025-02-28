const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
  readTime: { type: String, required: true },
});

module.exports = mongoose.model("Blog", blogSchema);
