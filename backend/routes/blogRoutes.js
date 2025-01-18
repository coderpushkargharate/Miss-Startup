const express = require("express");
const Blog = require("../models/blogSchema"); // Assuming you have a Blog model
const router = express.Router();

// Route to fetch all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new blog
router.post("/", async (req, res) => {
  const { title, description, imageUrl, date, readTime } = req.body;
  const blog = new Blog({
    title,
    description,
    imageUrl,
    date,
    readTime,
  });

  try {
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;




