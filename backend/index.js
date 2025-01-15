const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');  // Import dotenv package

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Blog schema
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  date: Date,
  readTime: String,
});

const Blog = mongoose.model('Blog', blogSchema);

// Route to fetch all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new blog
app.post('/api/blogs', async (req, res) => {
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

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
