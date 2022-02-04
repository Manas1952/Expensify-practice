const { merge } = require('webpack-merge')
require('dotenv').config({ 'path': '.env.development' })  // we write this line above of require('./webpack.common') because first we set env variables, then we define in plugin.
const common = require('./webpack.common')
const path  = require('path')


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/' // if you write here '/manas' or '/manas/' you have to write 'localhost:8080/manas'
    },
    historyApiFallback: true
  }
})