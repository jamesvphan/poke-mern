const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const routes = require('./src/server/routes.js')

const PORT = process.env.PORT || 3000

// CREATE APP
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// SET VIEW ENGINE
app.set('view engine', 'html')
// defines how to handle HTML file
app.engine('html', function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback)
})

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

// SET ROUTES
routes(app)

// SERVE APP
app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT)
})
