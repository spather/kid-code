const path = require('path');
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /client.*\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /client.*\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /client.*\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(__dirname, 'src/client/tsconfig.json'),
              // Silence atl when used with the --json option to prevent
              // unwanted output in the json file.
              silent: process.argv.indexOf('--json') !== -1,
            }
          }
        ]
      },
      {
        test: /server\/.*\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.resolve(__dirname, 'src/server/tsconfig.json'),
              // Silence atl when used with the --json option to prevent
              // unwanted output in the json file.
              silent: process.argv.indexOf('--json') !== -1,
            }
          }
        ]
      },
      {
        test: /client.*\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    // DashboardPlugin has to be last or the dashboard doesn't work!
    new DashboardPlugin(),
  ]
};
