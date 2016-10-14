const webpack = require('webpack')

module.exports = {

  entry:'./src/index.jsx',

  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query:{
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  resolve:{
    extensions:['', '.js', '.jsx']
  },

  devServer:{
    "contentBase": './dist',
    "inline": true,
  },

  plugins: process.env.NODE_ENV === 'production' ?[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
}