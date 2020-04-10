var path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '/torch-feed'),
    filename: '/js/bundle.js',
    publicPath: "/",
    sourceMapFilename: 'js/sourcemap.map',
    chunkFilename: 'js/[name].chunk.js'
  }
};