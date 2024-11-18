// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of the Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Import the JSON data
const data = require('./data/data.json');

// Set up the API route to send the JSON data
app.get('/api/data', (req, res) => {
  res.json(data); // Send the JSON data as a response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
