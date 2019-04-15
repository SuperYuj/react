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
    proxy: {
      '/mock': {
        target: 'http://192.168.35.114:3000/mock',
        pathRewrite: {
          '^/mock': ''
        },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
      },
    }
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