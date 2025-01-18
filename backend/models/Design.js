const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Design", designSchema);
