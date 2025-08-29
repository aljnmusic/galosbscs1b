const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Process CSS files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Resolves CSS imports
          'postcss-loader' // Processes CSS with PostCSS
        ],
      },
    ],
  },
  mode: 'production', // Set the mode to production
};