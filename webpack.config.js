const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': './src/index.web.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    rules: [{
      test: /\.less$/,
      exclude: /(node_modules)/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      exclude: [
        path.join(__dirname, 'node_modules')
      ],
      include: [
        path.join(__dirname, 'src/index.web.js'),
        path.join(__dirname, 'src/web'),
        path.join(__dirname, 'src/redux')
      ]
    }]
  }
};
