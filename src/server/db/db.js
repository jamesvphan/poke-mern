const mongoose = require('mongoose')
const db_url = "mongodb://admin:admin@ds155651.mlab.com:55651/pokegotchi_users"
mongoose.connect(process.env.MONGOLAB_URI || db_url)

const Pokemon = mongoose.model('Pokemon', {
  name: String
})

module.exports.Pokemon = Pokemon
