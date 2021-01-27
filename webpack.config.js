const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client.ts',
  devServer: {
    contentBase: "./public",
    compress: true,
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx",".ts",".js"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};