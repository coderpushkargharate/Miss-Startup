const express = require("express");
const Course = require("../models/Course"); // Assuming you have a Course model
const router = express.Router();

// GET: Fetch all courses or filter by category
router.get("/", async (req, res) => {
  const { category } = req.query; // Extract category from query string
  try {
    const query = category ? { category } : {}; // If category exists, filter by it
    const courses = await Course.find(query); // Fetch courses from database
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses", error: err.message });
  }
});

// POST: Add a new course
router.post("/", async (req, res) => {
  const { title, category, level, price, author, rating, image } = req.body; // Extract data from request body

  try {
    const newCourse = new Course({
      title,
      category,
      level,
      price,
      author,
      rating,
      image,
    }); // Create a new Course object
    await newCourse.save(); // Save the course to the database
    res.status(201).json({ message: "Course added successfully", course: newCourse });
  } catch (err) {
    res.status(500).json({ message: "Error adding course", error: err.message });
  }
});

// DELETE: Delete a course by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params; // Extract course ID from request parameters
  try {
    const deletedCourse = await Course.findByIdAndDelete(id); // Delete course by ID
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully", course: deletedCourse });
  } catch (err) {
    res.status(500).json({ message: "Error deleting course", error: err.message });
  }
});

// PUT: Update a course by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params; // Extract course ID from request parameters
  const updateData = req.body; // Extract update data from request body

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, updateData, { new: true }); // Update the course
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course updated successfully", course: updatedCourse });
  } catch (err) {
    res.status(500).json({ message: "Error updating course", error: err.message });
  }
});

module.exports = router;