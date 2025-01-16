const express = require("express");
const Course = require("../models/Course"); // Assuming you have a Course model
const router = express.Router();

// Get all courses or filter by category
router.get("/", async (req, res) => {
  const { category } = req.query; // Extract category from query string
  try {
    const query = category ? { category } : {}; // If category exists, filter by it
    const courses = await Course.find(query);
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses", error: err.message });
  }
});

module.exports = router;
