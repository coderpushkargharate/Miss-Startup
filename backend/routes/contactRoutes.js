const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Route to Save Form Data
router.post("/", async (req, res) => {
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

module.exports = router;
