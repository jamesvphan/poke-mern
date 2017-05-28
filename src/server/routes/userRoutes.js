const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/userModel.js') //allow use of User model
const router = express.Router //provides use to define routes

// Define User routes

router.get('/', (req, res) => {
  User.find((err, users) => {
    if (err) { console.log(err) }
    res.json(users)
  })
})


module.exports = router
