const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.json({ message: 'api endpoint is working' });
});

app.use('/api/v1/', (req, res) => {
  res.json({ message: 'endpoint/api/v1 is working' });
});

module.exports = app;

