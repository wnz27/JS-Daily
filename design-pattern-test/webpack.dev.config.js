/*
 * @Author: 27
 * @LastEditors: 27
 * @Date: 2021-04-22 03:30:14
 * @LastEditTime: 2021-04-22 03:42:48
 * @FilePath: /JS-Daily/design-pattern-test/webpack.dev.config.js
 * @description: type some description
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./release/bundle.js",
  },
};
