const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({}),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/notes'), to: 'notes' },
        { from: path.resolve(__dirname, 'src/index.css'), to: 'index.css' },
        { from: path.resolve(__dirname, 'src/index.html'), to: 'index.html' },
        { from: path.resolve(__dirname, 'src/favicon.ico'), to: 'favicon.ico' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.json', '.js'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
    inline: true,
    host: 'localhost',
    port: 2108,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
