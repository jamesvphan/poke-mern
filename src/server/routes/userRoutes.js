const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/userModel.js') //allow use of User model
const router = express.Router() //provides use to define routes

// Define User routes
router.get('/test', (req, res, next) => {
  debugger
  User.find({"username": req.headers.username}, (err, user) => {
    res.json(user)
  })
})

module.exports = router
