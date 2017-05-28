const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/userModel.js') //allow use of User model
const router = express.Router() //provides use to define routes

// Define User routes

// router.get('/', (req, res) => {
//   User.find((err, users) => {
//     if (err) { console.log(err) }
//     res.json(users)
//   })
// })

router.get('/test', (req, res, next) => {
  User.find({"username": "hello"}, (err, user) => {
    res.json(user)
  })
  // res.send("Reached test route")
})

module.exports = router
