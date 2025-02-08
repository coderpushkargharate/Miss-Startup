const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    subject: String,
    message: String,
    submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
