var webpack = require('webpack')
var path = require('path') //aows to manipulate paths more easily

//export config file
module.exports = {
  devtool: 'inline-source-map', //output line numbers for debugging
  // entry - define where webpack will look for entry file to load
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000/',
    'webpack/hot/only-dev-server',
    './src' // actuall entry file to load and will default look for index.js
  ],
  // where to put bundled file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // where webpack will look for files
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extension: ['', '.js'] // what extensions webpack expect to find
  },
  module: [
    {
      test: /\.js$/,
      exclude: /node_modles/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: { // dev not needed for production
    hot: true,
    proxy: { // define where webpack will look for a server to run on
      '*': 'http://localhost:3000'
    }
  }
}
