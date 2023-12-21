const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'process.env.NODE_ENV' || 'development',
  entry: {
    index: path.resolve(__dirname, 'client/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    port: 8080,
    open: true,
    compress: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/build/',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Solo-Project',
      filename: 'index.html',
      template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
