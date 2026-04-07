const express = require('express');
const app = express();

// 1. Global Middleware (logs request details)
app.use((req, res, next) => {
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('--- Global Middleware Executed ---\n');
    
    next(); // move to next middleware
});

// 2. Another Global Middleware (demonstrates chaining)
app.use((req, res, next) => {
    console.log('Second Middleware Executed');
    next();
});

// 3. Route-level Middleware
const checkAuth = (req, res, next) => {
    console.log('Route-level Middleware: Checking Auth...');
    
    const isAuthorized = true; // change to false to test
    
    if (isAuthorized) {
        next();
    } else {
        res.send('Unauthorized Access');
    }
};

// 4. Route using middleware
app.get('/secure', checkAuth, (req, res) => {
    res.send('Welcome to secure route');
});

//  Normal route
app.get('/', (req, res) => {
    res.send('Home Page');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});