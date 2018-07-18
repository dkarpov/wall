const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              query: {
                presets: ["es2015", "react"]
              }
            }
        },
        {
            test: /\.(css|less)$/,
            use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [htmlPlugin]
};
