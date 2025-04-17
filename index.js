const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route
app.get('/', (req, res) => {
    res.send('Hello from Node.js + Express!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
