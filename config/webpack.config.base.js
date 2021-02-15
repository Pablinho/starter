const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: ['babel-regenerator-runtime', './src/app.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-flow-strip-types'],
              presets: ['flow', 'stage-2'],
            },
          },
        ],
        // Exclude node_modules
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  node: {
    __dirname: true,
  },
  watchOptions: {
    ignored: ['node_modules'],
  },
};
