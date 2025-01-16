const express = require('express');
const Business = require('../models/businessModel');

const router = express.Router();

// POST route for adding business
router.post('/', async (req, res) => {
  const { title, description, imageUrl, price, author } = req.body;
  
  try {
    const newBusiness = new Business({title, description, imageUrl, price, rating});
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error adding business' });
  }
});

module.exports = router;
