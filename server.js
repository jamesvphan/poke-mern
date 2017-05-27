// Packages
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var fs = require('fs')

// Create APP
var app = express()

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

var test_data = [
  {id: 1, username: "test"},
  {id: 2,username: "jamesvphan"}
]

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public'), 'index.html')
})

app.get('/api/users', (req, res) => {
  res.json(test_data)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/users', (req, res) => {
  console.log("request body: " + req.body)
  let newUser = req.body
  newUser.id = test_data.length + 1
  test_data.push(newUser)
  res.status(200).send(JSON.stringify(newUser))
})

// Error Handler for any other type of request
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
})

// SERVE APP - listen on that port
app.listen(PORT, function() {
  console.log('Server running on localhost:' + PORT)
})
