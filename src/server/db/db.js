const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/pokemon')

const Pokemon = mongoose.model('Pokemon', {
  name: String
})

module.exports.Pokemon = Pokemon
