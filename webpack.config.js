const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts", // Ваш главный файл
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "custom-ui-kit",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
