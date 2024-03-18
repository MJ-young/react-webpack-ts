const babelMd = {
  install: `\`\`\` shell npm install --save-dev @babel/core @babel/plugin-transform-arrow-functions\`\`\``,
  code: `\`\`\` javascript
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
\`\`\``,
  config: `\`\`\` javascript
  {
    test: /\.js$/,
    // 只处理src/views/webpack/input.js
    include: path.resolve(__dirname, "../src/views/webpack/input.js"),
    use: [
      {
        loader: path.resolve(
          __dirname,
          "./loaders/arrowToFunctionLoader.js"
        ),
      },
    ],
  },
\`\`\``,
  result: `\`\`\` javascript
// 原始代码 
// input.js
const this_is_my_test_add = (a, b) => a + b;
export default this_is_my_test_add;

// 转换后代码 
// input.js
const this_is_my_test_add = function (a, b) {
  return a + b;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (this_is_my_test_add);

\`\`\``,
};

export default babelMd;
