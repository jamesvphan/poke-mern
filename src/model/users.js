const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  team: [
    {
      name: String,
      species: String
    }
  ]
})

module.exports = mongoose.model('Users', UsersSchema)
