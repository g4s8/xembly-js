const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

var config = {
 entry: './test.js',
 output: {
   filename: 'tests.js'
 },
 target: 'node',
 externals: [nodeExternals()],
 node: {
   fs: 'empty'
 },
 mode: "development",
 plugins: [
   new WebpackShellPlugin({
     onBuildEnd: "ava dist/tests.js",
     verbose: true
   })
 ]
};

module.exports = config;
