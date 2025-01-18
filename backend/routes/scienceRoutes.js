const express = require("express");
const Science = require("../models/Science");
const router = express.Router();

// Fetch all science courses
router.get("/", async (req, res) => {
  try {
    const scienceCourses = await Science.find();
    res.status(200).json(scienceCourses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching science courses", error: err.message });
  }
});

// Add a new science course
router.post("/", async (req, res) => {
  const { title, description, imageUrl, price, rating } = req.body;

  // Validate fields
  if (!title || !description || !price) {
    return res.status(400).json({ message: "Title, description, and price are required." });
  }

  const scienceCourse = new Science({
    title,
    description,
    imageUrl,
    price,
    rating,
  });

  try {
    const savedScienceCourse = await scienceCourse.save();
    res.status(201).json(savedScienceCourse);
  } catch (err) {
    res.status(400).json({ message: "Error creating science course", error: err.message });
  }
});

module.exports = router;
