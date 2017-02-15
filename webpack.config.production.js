const webpack = require("webpack")

module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: './dist',
    filename: 'tssync.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
