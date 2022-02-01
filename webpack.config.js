const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  // const CSSExtract = new ExtractTextPlugin('styles.css')
  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/disto/'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin()
    ],
    devtool: 'inline-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/' // if you write here '/manas' or '/manas/' you have to write 'localhost:8080/manas'
      },
      historyApiFallback: true
    }
  }
}