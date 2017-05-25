var express = require('express')
var app = express()

// declare port to listen to. process.env.PORT to be used if deployed
var PORT = process.env.PORT || 3000

// any route that we enter in browser, we will respond with this request
app.all('/*', function(req, res) {
  res.send('\
    <!DOCTYPE html>\
    <html lang="en">\
      <head>\
        <title>MEAN Poke App</title>\
      </head>\
      <body>\
        <h1>Hello World</h1>\
        <script src="bundle.js"></script>\
      </body>\
    </html>\
  ')
})

// listen on that port
app.listen(PORT, function() {
  console.log('Server running on ' + PORT)
})
