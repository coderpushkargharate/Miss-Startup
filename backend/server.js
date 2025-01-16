// Import required modules
require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser'); // Import bodyParser for handling JSON requests

// Import routes for course and blog operations
const courseRoutes = require("./routes/courseRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Define the port (from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON body

// Connect to MongoDB database using the URI from .env file
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });

// Use course and blog routes for handling requests
app.use("/api/courses", courseRoutes);
app.use("/api/blogs", blogRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
