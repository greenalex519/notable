const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
//requiring route file dependencies

const port = 8000;

// Second Way
const userRoutes =  require('./app/routes/userRoutes');
app.use('/', userRoutes);
const indexRoutes = require('./app/routes/index');
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
