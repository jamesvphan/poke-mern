// require all routes needed for app
const userRoutes = require('./routes/userRoutes.js')

// export routes function that accepts an app as param
module.exports = function routes(app) {
  // means any url request with /users will use routes defined in userRoutes
  app.use('/users', userRoutes)
}
