import "./index.less";
import Markdown from "../../components/markdown";
import { Card, Space, Col, Row, Button } from "antd";
import analyzeMd from "./analyze";
import bannerCss from "./banner";
import babelMd from "./babel";
import this_is_my_test_add from "./input";

const installCode = `
\`\`\`shell
npm install less less-loader
\`\`\`
`;

const configCode = `
\`\`\`javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}`;

export default function WebpackPage() {
  return (
    // 介绍当前项目的webpack配置，less使用的loader工作原理，配置代码
    <div>
      <div className="title">Webpack——loader与plugin</div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row gutter={16}>
          <Col span={24}>
            <Card>
              <div className="wp-title">less-loader</div>
              <div className="wp-desc">
                使用npm安装less-loader
                <Markdown content={installCode} />
              </div>
              <div className="wp-desc">
                在webpack.config.js中配置less-loader
                <Markdown content={configCode} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Card>
              <div className="wp-title">自定义AnalyzeWebpackPlugin</div>
              <div className="wp-desc">
                在emit之后，分析打包文件大小，生成md表格
                <Markdown content={analyzeMd} />
              </div>
              <div className="wp-title">自定义BannerPlugin</div>
              <div className="wp-desc">
                在afterCompile之后，添加作者及时间信息
                <Markdown content={bannerCss} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Card>
              <div className="wp-title">自定义babel-loader</div>
              <div className="wp-desc">
                自定义loader将箭头函数转换为普通函数（下面按钮使用了箭头函数，可以查看转换效果）
                <Button
                  type="primary"
                  onClick={() => {
                    this_is_my_test_add(1, 2);
                    window.open("https://babeljs.io/setup#installation");
                  }}
                >
                  babel官网
                </Button>
                <p>安装babel相关依赖</p>
                <Markdown content={babelMd.install} />
                <p>编写自定义loader</p>
                <Markdown content={babelMd.code} />
                <p>在webpack.config.js中配置babel-loader</p>
                <Markdown content={babelMd.config} />
                <p>转换效果</p>
                <Markdown content={babelMd.result} />
                <p>截图效果</p>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <img
                    src={require("@/assets/images/browser.png")}
                    alt="browser"
                    style={{ width: "80%" }}
                  />
                  <img
                    src={require("@/assets/images/input.png")}
                    alt="input"
                    style={{ width: "80%" }}
                  />
                </Space>
              </div>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
}
