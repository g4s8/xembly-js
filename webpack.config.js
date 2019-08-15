const path = require('path');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  mode: "development",
  output: {
    filename: PROD ? 'bundle.min.js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
