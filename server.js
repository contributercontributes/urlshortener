const express = require('express');
const { nanoid } = require('nanoid');
const path = require('path');

const app = express();
const port = 3000;
const urlDatabase = {};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl || !longUrl.trim()) {
    return res.status(400).json({ error: 'Long URL is required' });
  }

  const shortId = nanoid(6);
  urlDatabase[shortId] = longUrl;
  const shortUrl = `${req.protocol}://${req.get('host')}/${shortId}`;

  return res.status(200).json({ shortUrl });
});

app.get('/:shortId', (req, res) => {
  const originalUrl = urlDatabase[req.params.shortId];

  if (originalUrl) {
    return res.redirect(originalUrl);
  }

  return res.status(404).send('URL not found');
});

app.listen(port, () => {
  console.log(`URL Shortener is running on http://localhost:${port}`);
});
