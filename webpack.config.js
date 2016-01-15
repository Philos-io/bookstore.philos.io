var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './workshop/11_broken_bookstore/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/workshop/11_broken_bookstore/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      { test: /\.html$/, loaders: ['raw'] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/workshop/11_broken_bookstore/')
  }
};

