const packageJson = require("./package.json");
const version = packageJson.version;
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
  mode: "development",
  // mode: 'production',
  entry: "./src/P9asJ9.ts",
  devtool: "eval-cheap-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: `P9asJ9-${version}.js`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Make a global `process` variable that points to the `process` package,
      // because the `util` package expects there to be a global variable named `process`.
      // Thanks to https://stackoverflow.com/a/65018686/14239942
      process: "process/browser",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
    },
  },
};
