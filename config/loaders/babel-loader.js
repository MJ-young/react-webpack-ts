//babel-loader
const babel = require("@babel/core");
module.exports = function (context, map, meta) {
  let schema = {
    type: "object",
    properties: {
      presets: {
        type: "array",
      },
    },
    additionalProperties: true,
  };
  const callback = this.async();
  let options = this.getOptions(schema);
  babel.transform(context, options, function (err, result) {
    if (err) callback(err);
    else callback(null, result.code);
  });
  return context;
};
