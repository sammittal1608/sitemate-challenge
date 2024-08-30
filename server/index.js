const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Root Route - Handles GET requests to "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Issue Tracker API!');
});

// Import Routes
const issueRoutes = require('./routes/issueRoutes');
app.use('/api/issues', issueRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
