var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var rucksack = require('rucksack-css')
var env = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    _html: './index.html',
    app: [
      './app',
    ],
    vendor: [
      'expose?jQuery!expose?$!jquery', 'lodash',
      'react', 'react-dom',
      'react-router', 'redux',
      'react-redux', 'react-router-redux',
      'redux-form', 'fetch-plus', 'redux-thunk',
      'react-validation-mixin', 'joi-validation-strategy',
      'bootstrap/dist/css/bootstrap.css', 'bootstrap/dist/js/bootstrap.min.js',
    ]
  },
  output: {
    path: path.join(__dirname, './assets'),
    filename: 'js/app.js',
    chunkFilename: 'js/[name].[id].chunk.js'
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      { test: /\.html$/,
        loader: 'file?name=[name].[ext]' },
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot', 'babel' ] },
      { test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=100000&minetype=application/font-woff" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]" },
      { test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=svg/[name].[ext]" },
      // style编译进js
      // { test: /\.(css|scss)$/, 
      //   exclude: /\.useable\.css$/, 
      //   loaders: ['style', ExtractTextPlugin.extract('css!sass!postcss')]},
      // { test: /\.useable\.(css|scss)$/, 
      //   loaders: ['style/useable', ExtractTextPlugin.extract('css!sass!postcss')]}
      // style split
      { test: /\.(css|scss)$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract(['css', 'sass', 'postcss']) },
      { test: /\.(css|scss)$/,
        exclude: [/node_modules/, /\.useable\.css$/],
        loaders: ['style/url', ExtractTextPlugin.extract(['file?name=css/[name].css', 'sass', 'postcss'])] },
      { test: /\.useable\.(css|scss)$/,
        exclude: /node_modules/,
        loaders: ['style/url/useable', ExtractTextPlugin.extract(['file?name=css/[name].css', 'sass', 'postcss'])] }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './js/vendor.js'),
    new ExtractTextPlugin("css/[name].css"),
    (env == 'production' ? new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }) : function(){}),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) }
    })
  ],
  devServer: {
    contentBase: './assets',
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    }
  }
}
