const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  favicon: "./assets/Face me.jpg"
});

module.exports = {
  // Our application entry point.
  entry: "./src/index.tsx",
  devtool: 'source-map',
  
  // These rules define how to deal 
  // with files with given extensions.
  // For example, .tsx files 
  // will be compiled with ts-loader,
  // a spcific loader for webpack
  // that knows how to work with TypeScript files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   importLoaders: 1,
            //   modules: true
            // }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Telling webpack which extensions
  // we are interested in.
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  // What file name should be used for the result file,
  // and where it should be palced.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    historyApiFallback: true,
  },

  // Use the html plugin.
  plugins: [htmlPlugin],
};