class BannerPlugin {
  constructor(options = {}) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.afterCompile.tapAsync(
      "BannerPlugin",
      (compilation, callback) => {
        // 1.获取即将输出的资源文件compiler.assets
        // 2.只保留js和css资源
        const extension = ["css", "js"];
        //assets文件都是 文件路径：文件内容的格式 所以做一下处理
        const assets = Object.keys(compilation.assets).filter((assetPath) => {
          let splitted = assetPath.split(".");
          return extension.includes(splitted[splitted.length - 1]);
        });
        // 3.遍历资源添加注释
        let prefix = `/*\n\t*author:${
          this.options.author
        }\n\t*time:${new Date().toLocaleDateString()}\n*/\n`;
        assets.forEach((asset) => {
          //找到原文件内容
          const source = compilation.assets[asset].source();
          //内容添加注释
          const content = prefix + source;

          compilation.assets[asset] = {
            //调用source方法，返回内容
            source() {
              return content;
            },
            //返回资源大小
            size() {
              return content.length;
            },
          };
        });
        callback();
      }
    );
  }
}
module.exports = BannerPlugin;
