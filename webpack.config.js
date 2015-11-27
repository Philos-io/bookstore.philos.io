var path = require('path');

module.exports = {
  // devtool: 'source-map',
  entry: './workshop/07_refactoring_best_practices_advanced_routing/solution/index',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/workshop/07_refactoring_best_practices_advanced_routing/solution/')
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
    contentBase: path.join(__dirname, '/workshop/07_refactoring_best_practices_advanced_routing/solution')
  }
};

// module.exports = {
// 	entry: './workshop/07_refactoring_best_practices_advanced_routing/solution/index',
// 	output:{
// 		filename: 'bundle.js',
//         path: __dirname
// 	},
//
//
// 	module: {
//         loaders: [
//             {
//             	test: /\.js$/,
//             	exclude: /node_modules/,
//             	loader: "babel"
//             },
//             {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//             }
//     	]
// 	}
// };
