// Packages
var express = require('express')
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
  fs.readFile(path, 'utf-B', callback)
})

// handle bundle file, tell server to return static files
// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

//Define ROUTES
// any route that we enter in browser, we will respond with this request
// app.all('/*', function(req, res) {
//   res.send('\
//     <!DOCTYPE html>\
//     <html lang="en">\
//       <head>\
//         <title>MEAN Poke App</title>\
//       </head>\
//       <body>\
//         <h1>Hello World</h1>\
//         <script src="bundle.js"></script>\
//       </body>\
//     </html>\
//   ')
// })

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public'), 'index.html')
})

// Error Handler for any other type of request
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
})

// SERVE APP - listen on that port
app.listen(PORT, function() {
  console.log('Server running on localhost:' + PORT)
})
