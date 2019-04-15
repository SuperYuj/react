var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    contentBase: "./dist", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 8081, //端口号
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    },
   {
     test: /\.css$/,
     loader: 'style-loader!css-loader',
   },
  ]
  },
   plugins: [
     new webpack.BannerPlugin("版权所有，翻版必究，作者:zhousir"),
     new HtmlWebpackPlugin({
       filename: 'index.html',
       template: 'index.html'
     }),
   ]
}