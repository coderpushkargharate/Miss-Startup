const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/free_sessions', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Mongoose Schema and Model
const SessionSchema = new mongoose.Schema({
  childName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: String, required: true },
  sessionMode: { type: String, required: true },
});

const Session = mongoose.model('Session', SessionSchema);

// API Routes
app.post('/api/sessions', async (req, res) => {
  try {
    const { childName, mobileNumber, email, state, sessionMode } = req.body;

    // Save data to database
    const newSession = new Session({ childName, mobileNumber, email, state, sessionMode });
    await newSession.save();

    res.status(200).json({ message: 'Session successfully scheduled!' });
  } catch (error) {
    console.error('Error saving session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve React Frontend
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
