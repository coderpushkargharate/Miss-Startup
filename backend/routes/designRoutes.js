const express = require("express");
const Design = require("../models/Design");
const router = express.Router();

// Fetch all design courses
router.get("/", async (req, res) => {
  try {
    const designCourses = await Design.find();
    res.status(200).json(designCourses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching design courses", error: err.message });
  }
});

// Add a new design course
router.post("/", async (req, res) => {
  const { title, description, imageUrl, price, rating } = req.body;

  const designCourse = new Design({
    title,
    description,
    imageUrl,
    price,
    rating,
  });

  try {
    const savedDesignCourse = await designCourse.save();
    res.status(201).json(savedDesignCourse);
  } catch (err) {
    res.status(400).json({ message: "Error creating design course", error: err.message });
  }
});

module.exports = router;
