const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')
const config = require('../config')
 
const paths = config.utils_paths
module.exports = {
    entry: {
      vendors: []
    },
    output: {
      filename: '[name].js',
      path: paths.modules('modules'),
      library: '[name]'
    },
    plugins: [
       
      new webpack.DllPlugin({
        path: paths.modules('modules')+'/[name]-manifest.json',
        // This must match the output.library option above
        name: '[name]',
        context:__dirname
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,  // remove all comments
        },
        compress: {

          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
      })
    ],
  }
