const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolveTsconfigPathsToAlias = require("./script/resolve-tsconfig-path-to-webpack-alias");

const SRC_ROOT = path.resolve(__dirname, "src");
const DIST_ROOT = path.resolve(__dirname, "dist");

module.exports = (env, argv) => {
  console.log(argv.mode);
  const config = {
    context: SRC_ROOT,
    devServer: {
      contentBase: "./dist",
      hot: true      
    },
    resolve: {
      alias: resolveTsconfigPathsToAlias({
        tsconfigPath: "../tsconfig.json",
        webpackConfigBasePath: "src"
      }),
      extensions: [".js", ".ts"]
    },
    performance: {
      hints: false,
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
      rules: [
        { parser: { system: false } },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
        {
          test: /\.ts$/,
          include: SRC_ROOT,
          loader: "ts-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    }
  };
  return config;
};
