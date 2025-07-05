const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Import your User model
const User = require('./models/user');

// Test route to insert a user
app.get('/api/test-user', async (req, res) => {
  try {
    const newUser = new User({
      uid: 'test123',
      displayName: 'Bhuvan',
      email: 'bhuvan@example.com'
    });

    await newUser.save();
    res.send('User saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
