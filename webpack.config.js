const path = require('path');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  mode: PROD ? "production" : "development",
  output: {
    filename: PROD ? 'xembly.min.js' : 'xembly.js',
    libraryTarget: 'var',
    library: 'xembly',
    path: path.resolve(__dirname, 'lib')
  }
};
