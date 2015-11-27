var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './workshop/09_e2e_testing_advanced_angular_concepts/solution/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/workshop/09_e2e_testing_advanced_angular_concepts/solution')
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
    contentBase: path.join(__dirname, '/workshop/09_e2e_testing_advanced_angular_concepts/solution')
  }
};

