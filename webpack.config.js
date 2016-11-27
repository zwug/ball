var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css/,
        loaders: [
          'isomorphic-style-loader',
          `css-loader?${JSON.stringify({
            importLoaders: 1,
            modules: true
          })}`,
          'postcss-loader?pack=default'
        ],
        include: __dirname
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: '[hash].[ext]',
          limit: 10000
        }
      }
    ]
  },
  // The list of plugins for PostCSS
  postcss(bundler) {
    return {
      default: [
        require('postcss-import')(),
        require('postcss-flexbugs-fixes')(),
        require('autoprefixer')(),
        require('postcss-custom-media')()
      ]
    };
  }
}
