const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to rapid-server');
});

app.listen(3000, (err) => {
  if(err) {
    console.log('Error listenig on port 3000.');
  } else {
    console.log('Started listening on port 3000.');
  }
});