import path from 'path';

module.exports = {
  entry: './index.js',  // Your main file
  output: {
    filename: 'bundle.js',  // The output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  resolve: {
    // Add '.js' as a resolvable extension.
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Optional: If you're using Babel
        },
      },
    ],
  },
  mode: 'development',  // or 'production' based on your needs
};

  