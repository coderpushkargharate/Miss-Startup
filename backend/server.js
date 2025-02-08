require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Contact Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route to Save Form Data
app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    const newContact = new Contact({ name, phone, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Import routes for blogs, AI, business, science, and design
const blogRoutes = require("./routes/blogRoutes");
const aiRoutes = require("./routes/aiRoutes");
const businessRoutes = require("./routes/businessRoutes");
const scienceRoutes = require("./routes/scienceRoutes");
const designRoutes = require("./routes/designRoutes");

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/science", scienceRoutes);
app.use("/api/designArchitect", designRoutes);

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).json({ message: "API endpoint not found" });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An internal server error occurred", error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
