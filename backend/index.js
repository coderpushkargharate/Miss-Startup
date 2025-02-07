const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/blogdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  date: Date,
  readTime: String,
});

const Blog = mongoose.model("Blog", blogSchema);

// GET all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET a single blog by ID
app.get("/api/blogs/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});