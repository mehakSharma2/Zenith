const express = require('express');
const path = require('path');
const app = express();

// API routes (define your backend API routes here)
// e.g., app.get('/api/data', (req, res) => { ... })

console.log(`server started`);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../my-app/public')));

// // Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/public', 'index.html'));
});


// // app.get('/api/data', (req, res) => {
//     console.log('Received request for data');
//     res.send({ message: 'Hello from the server!' });
// });


// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
