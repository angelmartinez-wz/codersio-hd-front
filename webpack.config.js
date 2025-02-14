module.exports = {
  module: {
    devtool: false,
    rules: [
      {
        test: /\.js$/,
        use: "null-loader",
        enforce: "pre",
        include: /node_modules/,
      },
    ],
  },
};
