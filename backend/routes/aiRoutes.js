const express = require("express");
const Ai = require("../models/aiModel");

const router = express.Router();

// POST route for adding AI course
router.post("/", async (req, res) => {
  const { title, description, imageUrl, price, rating } = req.body;

  try {
    const newAiCourse = new Ai({ title, description, imageUrl, price, rating });
    await newAiCourse.save();
    res.status(201).json(newAiCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding AI course" });
  }
});

// GET route for fetching all AI courses
router.get("/", async (req, res) => {
  try {
    const aiCourses = await Ai.find();
    res.status(200).json(aiCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching AI courses" });
  }
});

module.exports = router;
