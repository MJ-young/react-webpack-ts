class AnalyzeWebpackPlugin {
  // constructor() { }
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "AnalyzeWebpackPlugin",
      (compilation, callback) => {
        const assets = Object.entries(compilation.assets);
        let content = `|资源名称|资源大小|
|---|---|`;
        assets.forEach(([filename, file]) => {
          content += `\n|${filename}|${Math.floor(file.size() / 1024) + "kb"}|`;
        });
        // 生成一个md文件
        compilation.assets["analyze.md"] = {
          source() {
            return content;
          },
          size() {
            return content.size;
          },
        };
        callback();
      }
    );
  }
}
module.exports = AnalyzeWebpackPlugin;
