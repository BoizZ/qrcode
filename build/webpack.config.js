const config = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    filename: 'app.bundle.js',
    path: './qrcode/public',
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'stage-2'],
          plugins: ['transform-async-to-generator', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'eval'
}

module.exports = config