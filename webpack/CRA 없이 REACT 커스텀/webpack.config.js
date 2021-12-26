const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    main: "./src/App.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_module/,
      },  // React js, jsx files babel loader
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"],
      }  // css, scss files loader
    ]
  }
}