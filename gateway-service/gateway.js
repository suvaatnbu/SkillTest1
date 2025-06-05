const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
  res.send('Gateway Service running');
});

app.listen(PORT, () => {
  console.log(`Gateway Service listening on port ${PORT}`);
});

