const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const routes = require('./src/server/routes.js')
const mongoose = require('mongoose')
const config = require('./src/server/db/db.js')

const PORT = process.env.PORT || 3000

// CONNECT TO MONGO DATABASE
mongoose.connect(config.db_url)

mongoose.connection.on('connected', () => {
  console.log('Connected to database: ' + config.db_url)
})

mongoose.connection.on('errer', () => {
  console.log('Error connecting to databse: ' + config.db_url)
})

// CREATE APP
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
  type: function() {
    return true
  }
}))

// SET VIEW ENGINE
app.set('view engine', 'html')
// defines how to handle HTML file
app.engine('html', function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback)
})

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, username")
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// SET ROUTES
routes(app)

// SERVE APP
app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT)
})
