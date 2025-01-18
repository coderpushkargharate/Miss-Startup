const mongoose = require("mongoose");

const aiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Ai", aiSchema);
