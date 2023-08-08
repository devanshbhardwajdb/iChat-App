const path = require('path');

module.exports = {
  entry: './functions/index.js', // Your main client-side entry file
  output: {
    filename: 'bundle.js', // Output filename for the bundled JavaScript
    path: path.resolve(__dirname, 'dist'), // Output directory path
  },
  // Add any necessary loaders or plugins for your project
  module: {
    rules: [
      // Example: Use Babel to transpile JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
