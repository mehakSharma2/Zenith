const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example API Route
app.get('/api', (req, res) => {
  res.send("Hello from backend");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
