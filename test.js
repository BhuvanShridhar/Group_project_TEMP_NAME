// In routes/test.js or index.js
const User = require('./models/user');

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
    res.status(500).send('Error saving user');
  }
});
