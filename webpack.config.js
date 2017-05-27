var webpack = require('webpack')
var path = require('path') //allows to manipulate paths more easily

//export config file
module.exports = {
  devtool: 'inline-source-map', //output line numbers for debugging
  // entry - define where webpack will look for entry file to load
  entry: [
    // 'webpack-dev-server/client?http://127.0.0.1:3000/',
    // 'webpack/hot/only-dev-server',
    './src' // actual entry file to load and will default look for index.js
  ],
  // where to put bundled file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // where webpack will look for files
  // resolve: {
  //   modules: ['node_modules', 'src'],
  //   extensions: ['*', '.js', '.jsx'] // what extensions webpack expect to find
  // },
  module: { //instruction for transpiling
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { // tell babel what it should be doing
        presets: ['react', 'es2015'] // transpile non-pure js elements into javascript
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  // devServer: { // dev not needed for production
  //   hot: true,
  //   proxy: { // define where webpack will look for a server to run on
  //     '*': 'http://localhost:3000'
  //   }
  // }
}
