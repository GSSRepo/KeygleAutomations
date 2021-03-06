var path = require('path')

module.exports = {
  entry: './home.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname),
    filename: '_bundle.js',
  },
}
