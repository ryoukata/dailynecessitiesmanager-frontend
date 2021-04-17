const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public/js')
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env', "@babel/preset-react"]
                      }
                  }
              ]
          },
          {
            test: /\.css/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { url: false }
              }
            ]
          }
      ]
  }
};