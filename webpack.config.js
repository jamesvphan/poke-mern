var webpack = require('webpack')
var path = require('path') //allows to manipulate paths more easily

//export config file
module.exports = {
  devtool: 'inline-source-map', //output line numbers for debugging
  // entry - define where webpack will look for entry file to load
  entry: [
    // 'webpack-dev-server/client?http://localhost:3001/',
    // 'webpack/hot/only-dev-server',
    './src/index.js' // actual entry file to load and will default look for index.js
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
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://localhost:3000'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    }
  }
}
