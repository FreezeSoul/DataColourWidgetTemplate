const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

const SRC_ROOT = path.resolve(__dirname, "src");
const DIST_ROOT = path.resolve(__dirname, "dist");

module.exports = (env, argv) => {
  let widgetPath = "widget";
  if (argv.path) widgetPath = argv.path;

  const devMode = argv.mode === "development";
  const config = merge(baseConfig(env, argv), {
    context: SRC_ROOT,
    entry: {},
    output: {
      path: DIST_ROOT,
      library: widgetPath,
      libraryTarget: "umd",
      umdNamedDefine: true,
      filename: "widgets/" + widgetPath + "/bootstrap.js",
    },
    devServer: {
      port: 8088,
    },
    /*externals: {
		'jquery': 'jQuery'
    },*/
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "./widgets/widgets.json", to: "./widgets/widgets.json" },
          { from: "./widgets/import.json", to: "./widgets/import.json" },
          { from: "./widgets/shared" + (devMode ? "" : "/property"), to: "./widgets/shared" + (devMode ? "" : "/property") },
          {
            from: "./widgets/" + widgetPath + "/assets",
            to: "./widgets/" + widgetPath + "/assets",
          },
          {
            from: "./widgets/" + widgetPath + "/manifest.json",
            to: "./widgets/" + widgetPath + "/manifest.json",
          },
          {
            from: "./widgets/" + widgetPath + "/property.json",
            to: "./widgets/" + widgetPath + "/property.json",
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
          //loader: "url-loader?limit=100000&name=widgets/" + widgetPath + "/assets/[name].[hash].[ext]",
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 100000,
                name: "widgets/" + widgetPath + "/assets/[name].[fullhash].[ext]",
              },
            },
          ],
        },
      ],
    },
  });

  config.entry[widgetPath] = "./widgets/" + widgetPath + "/widget.ts";

  if (devMode) {
    config.devtool = "inline-source-map";
  } else {
    config.plugins = config.plugins.concat([]);
  }
  return config;
};

//npm run start-widget -- --name=widget
//npm run build-widget:pro -- --name=widget
