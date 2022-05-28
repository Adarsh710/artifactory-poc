const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: false,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
