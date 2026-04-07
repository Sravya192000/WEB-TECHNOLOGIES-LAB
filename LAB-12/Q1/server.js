// Import express
const express = require('express');

// Create app
const app = express();

// Middleware (to read JSON data)
app.use(express.json());

// Import user routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/users', userRoutes);

// Start server
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Welcome to my REST API');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});