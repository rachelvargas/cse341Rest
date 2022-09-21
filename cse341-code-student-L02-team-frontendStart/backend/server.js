const express = require('express');
//const professional = require('./routes/professional')
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

//const routeRoutes = require('./routes/route');

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
.use('/', require('./routes'));

//app.listen(port, () => console.log(`Listening on port ${port}`))

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => console.log(`Connecting to DB and listening on ${port} `))
  }
})



