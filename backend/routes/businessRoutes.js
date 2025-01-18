const express = require('express');
const Business = require('../models/businessModel');

const router = express.Router();

// POST route for adding a business
router.post('/', async (req, res) => {
  const { title, description, imageUrl, price, author } = req.body;

  try {
    const newBusiness = new Business({ title, description, imageUrl, price, author });
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error adding business' });
  }
});

// GET route for fetching all businesses
router.get('/', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching businesses' });
  }
});

module.exports = router;
