const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  username: String,
  team: [
    {
      name: String,
      species: String
    }
  ]
})

module.exports = mongoose.model('Users', UsersSchema)
