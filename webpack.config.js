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
        exclude: /node_modules/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader'
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