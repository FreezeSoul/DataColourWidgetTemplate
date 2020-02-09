const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");

const SRC_ROOT = path.resolve(__dirname, "src");
const DIST_ROOT = path.resolve(__dirname, "dist");

module.exports = (env, argv) => {
  let widgetName = "widget";
  if (argv.name) widgetName = argv.name;

  const devMode = argv.mode === "development";
  const config = merge(baseConfig(env, argv), {
    context: SRC_ROOT,
    entry: {},
    output: {
      path: DIST_ROOT,
      library: widgetName,
      libraryTarget: "umd",
      umdNamedDefine: true,
      filename: "widgets/" + widgetName + "/bootstrap.js"
    },
    devServer: {
      port: 8088
    },
    /*externals: {
		'jquery': 'jQuery'
    },*/
    plugins: [
      new CopyPlugin([
        { from: "./widgets/widgets.json", to: "./widgets/widgets.json" },
        { from: "./widgets/import.json", to: "./widgets/import.json" },
        { from: "./widgets/shared", to: "./widgets/shared" },
        {
          from: "./widgets/" + widgetName + "/assets",
          to: "./widgets/" + widgetName + "/assets"
        },
        {
          from: "./widgets/" + widgetName + "/manifest.json",
          to: "./widgets/" + widgetName + "/manifest.json"
        },
        {
          from: "./widgets/" + widgetName + "/property.json",
          to: "./widgets/" + widgetName + "/property.json"
        }
      ])
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
          loader:
            "url-loader?limit=100000&name=widgets/" +
            widgetName +
            "/assets/[name].[hash].[ext]"
        }
      ]
    }
  });

  config.entry[widgetName] = "./widgets/" + widgetName + "/widget.ts";

  if (devMode) {
    config.devtool = "inline-source-map";
  } else {
    config.plugins = config.plugins.concat([]);
  }
  return config;
};

//npm run start-widget -- --name=widget
//npm run build-widget:pro -- --name=widget
