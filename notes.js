I'm coming from a background of creating server-side routes with Ruby on Rails and client-side routes with React-router. I'm now working on a project to use Express to create server-side routes, but having a hard time understanding how to connect client/server-side routes using webpack.

My server-side code is running on PORT 3000 and I want to run my client code on a different port so that when I navigate to a React route, it'll make the necessary request to the server side route.

My webpack.config.js is currently this:

module.exports = {
  devtool: 'inline-source-map', //output line numbers for debugging
  // entry - define where webpack will look for entry file to load
  entry: [
    'webpack-dev-server/client?http://localhost:3001/',
    'webpack/hot/only-dev-server',
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
  devServer: {
    hot: true,
    host: 'localhost', // Defaults to `localhost`
    port: 3001, // Defaults to 8080
    proxy: {
      '^/api/*': {
        target: 'http://localhost:3000/',
        secure: false
      }
    }
  }
}
