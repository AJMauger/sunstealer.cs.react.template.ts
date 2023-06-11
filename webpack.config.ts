
import * as fs from "fs"
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration[] = [
    {
        mode: "development",

        devtool: "inline-source-map",
      
        entry: "./src/index.tsx",
      
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
            },
            {
              test: /\.(ts|js)x?$/i,
              use: ["ts-loader"],
              exclude: /node_modules/
            }
          ]
        },
      
        output: {
          filename: "[name].bundle.js",
          publicPath: "./"
        },
      
        plugins: [
          new HtmlWebpackPlugin({
            template: "./src/index.html"
          }),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.ProvidePlugin({
            process: "process/browser.js"
          })
        ],
      
        resolve: {
          alias: {
            browser: "process/browser" },
          extensions: [".tsx", ".ts", ".js", ".jsx"],
          fallback: { "buffer": require.resolve("buffer"), 
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util") }
        },

        target: "web"
    }
];

export default config;
