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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Schema and Model
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

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
