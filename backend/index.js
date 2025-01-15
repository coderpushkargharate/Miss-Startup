// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/blogDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Blog Model
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  date: String,
  readTime: String,
});

const Blog = mongoose.model("Blog", blogSchema);

// Routes
// Add Blog
app.post("/api/blog", async (req, res) => {
  const { title, description, image, date, readTime } = req.body;
  const newBlog = new Blog({ title, description, image, date, readTime });
  try {
    await newBlog.save();
    res.status(201).send("Blog added");
  } catch (error) {
    res.status(400).send("Error adding blog");
  }
});

// Get All Blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).send("Error fetching blogs");
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
