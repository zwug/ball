var path = require('path')
var webpack = require('webpack')

var plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: plugins,
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
        require('autoprefixer')(),
        require('postcss-custom-media')(),
        require('postcss-flexbugs-fixes')(),
        require('postcss-nesting')()
      ]
    };
  }
}
