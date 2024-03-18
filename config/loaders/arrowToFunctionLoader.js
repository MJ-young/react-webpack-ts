const babel = require("@babel/core");

module.exports = function (source) {
  const options = {
    presets: [],
    plugins: ["@babel/plugin-transform-arrow-functions"],
  };

  // 使用Babel转换源代码
  const result = babel.transformSync(source, options);

  // 返回转换后的代码
  return result.code;
};
