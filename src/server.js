const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const DbOperations = require('./db-operations');
let db;

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Welcome to rapid-server');
});


mongoClient.connect('mongodb://localhost:27017/rapid-data', (err, client) => {
  if (err) {
    console.log('Error connecting to DB, aborting.');
  } else {
    console.log('DB connected.');
    db = new DbOperations(client.db('rapid-data'));
    startServer();
  }
})

function startServer() {
  app.listen(3000, (err) => {
    if(err) {
      console.log('Error listenig on port 3000.');
    } else {
      console.log('Started listening on port 3000.');
    }
  });
}