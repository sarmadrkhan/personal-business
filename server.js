const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/fetch-reviews', async (req, res) => {
  const placeId = req.query.placeId;
  const apiKey = 'YOUR_SERVER_SIDE_API_KEY'; // Securely stored API key
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=review&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
