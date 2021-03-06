var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    //'./middleware',
    // './sample0/containers/App.js'
    './sample1/index.js'
  ],
  output: {
    path: path.join(__dirname, 'sample1/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['babel?presets[]=es2015&presets[]=react&presets[]=stage-0'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
};
