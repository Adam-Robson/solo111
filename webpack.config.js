/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');

const developmentMode = process.env.NODE_ENV !== 'production';

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    title: 'Hot Module Replacement',
  }),
  // new CopyPlugin({
  //   patterns: [{ from: 'public' }],
  // }),
  new CompressionPlugin(),
  new MiniCssExtract({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new ESLintPlugin({
    extensions: ['js', 'jsx'],
    fix: true
  }),
  new webpack.ProvidePlugin({
    React: 'react'
  }),
];

if (developmentMode) {
  // enable hot replacement only in development
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

// require('dotenv').config();

/** CONFIGURATION OBJECT */
module.exports = {

  /**MODE*/
  mode: 'development',

  /**ENTRY*/
  entry: {
    index: './src/index.js'
  },

  /**DEVTOOL*/
  devtool: 'inline-source-map',

  /**OUTPUT*/
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  /**DEVSERVER*/
  devServer: {
    port: 7890,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    static: './dist',
  },

  /**PLUGINS*/
  plugins,

  /**MODULE*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtract.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: developmentMode,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: developmentMode,
              postcssOptions: {
                plugins: [
                  require('postcss-import')(),
                  require('autoprefixer')(),
                  require('postcss-nested')()
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },

  /**OPTIMIZATION */
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new CssMinimizer(),
    ],
  },

  /**RESOLVE*/
  resolve: {
    extensions: ['.*', '.js', '.jsx']
  }
};
