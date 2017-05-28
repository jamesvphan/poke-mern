// dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var fs = require('fs')
var User = require('./src/model/users')

// Connect to MongoDB
var mongoose = require('mongoose')
// var MongoClient = mongodb.MongoClient
var db_url = "mongodb://admin:admin@ds155651.mlab.com:55651/pokegotchi_users"

mongoose.connect(db_url)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function() {
  console.log("successfully connected!")
})

db.collection("users").createIndex({username: 1},{unique: true, dropDups: true})

let userOne = new User({
  username: "test"
})

let userTwo = new User({
  username: "hello"
})
// db.User.insert(userOne)
// userOne.save(function(err) {
//   if (err) console.log(err);
//   console.log("User saved!")
// })
// userTwo.save(function(err) {
//   if (err) console.log(err);
//   console.log("User saved!")
// })

// Create APP
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

// declare port to listen to. process.env.PORT to be used if deployed
var PORT = process.env.PORT || 3000

//View Engine - how to return a file
app.set('view engine', 'html')

// defines how to handle HTML file
app.engine('html', function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback)
})

// handle bundle file, tell server to return static files
// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public'), 'index.html')
})

app.get('/api/users', (req, res) => {
  db.collection("users").find().toArray(function(err, doc) {
    res.json(doc)
  })
})


app.post('/api/users/', (req, res) => {
  console.log("request body: " + req.body + "dsf" + req.body.id + req.body.username)
  let newUser = req.body
  console.log(newUser)
  test_data.push(newUser)
  res.json(newUser)
})

// Error Handler for any other type of request
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
})

// SERVE APP - listen on that port
app.listen(PORT, function() {
  console.log('Server running on localhost:' + PORT)
})
