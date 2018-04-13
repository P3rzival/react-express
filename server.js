const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.json({"express":"This comes from express on server.js"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));