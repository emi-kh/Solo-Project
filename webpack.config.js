const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
      title: 'NoteNest',
      filename: 'index.html',
      template: './client/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  mode: isProduction ? 'production' : 'development',
};

module.exports = config;

// module.exports = () => {
//   if (isProduction) {
//     config.mode = 'production';
//   } else {
//     config.mode = 'development';
//   }
//   return config;
// };





// output from webpack-cli init config process:

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



// const config = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//     },
//     devServer: {
//         open: true,
//         host: 'localhost',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'index.html',
//         }),

//         // Add your plugins here
//         // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/i,
//                 loader: 'babel-loader',
//             },
//             {
//                 test: /\.css$/i,
//                 use: [stylesHandler,'css-loader'],
//             },
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//                 type: 'asset',
//             },

//             // Add your rules for custom modules here
//             // Learn more about loaders from https://webpack.js.org/loaders/
//         ],
//     },
// };

// module.exports = () => {
//     if (isProduction) {
//         config.mode = 'production';
        
//         config.plugins.push(new MiniCssExtractPlugin());
        
        
//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };