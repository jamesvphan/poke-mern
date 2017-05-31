I have a project that was built on Rails and React. I'm now working on a project to convert back-end to Express/Mongo, but having a hard time communicating client/server-side routes using webpack.

Before, I had both my Rails and React running on separate ports so I didn't have conflicts when making API requests. I assume this would be the same with Express and so I'm running my server on PORT 3000 and my webpack-dev-server is on 8080 (default port).

I have a route (/user) in both sides: Express, to return a list of users from DB, and React, to render a component when navigating to localhost:8080. But, when I do navigate to localhost:8080, I see my entire project folder and going to /user returns error that it can't connect to this route. I'm thinking it has to do with my webpack config, but can't seem to configure it correctly.

My webpack.config.js is currently this:

    module.exports = {
      devtool: 'inline-source-map',
      entry: [
        './src'
      ],
      output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
      },
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ],
      devServer: {
        hot: true,
        proxy: {
          '*': 'http://localhost:3000'
        }
      }
    }
My React component has a path to /user that will render a component

    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route path='/' component={App}></Route>
            <Route path='/user' component={User}></Route>
          </div>
        </Router>
      </Provider>,
      document.getElementById('root')
    )

My Express route configuration for a User model. For testing purposes, I'm return a user I know exists in my DB

    const mongoose = require('mongoose')
    const express = require('express')
    const User = require('../models/userModel.js')
    const router = express.Router()

    router.get('/user', (req, res, next) => {
      debugger
      User.find({"username": "hello"}, (err, user) => {
        res.json(user)
      })
    })

    module.exports = router


How to communicate Express server with React client
