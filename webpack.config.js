var path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2017"]
        }
      }
    ]
  }
};
