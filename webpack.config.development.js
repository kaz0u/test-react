/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("./webpack.config.common");

module.exports = {
  ...commonConfig,
  mode: "development",
  devtool: "inline-source-map",
};
