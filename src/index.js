const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend API!');
});

// Version endpoint (useful for CI/CD verification)
app.get('/version', (req, res) => {
  const version = process.env.VERSION || 'dev';
  res.json({ version });
});

// Start server
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
