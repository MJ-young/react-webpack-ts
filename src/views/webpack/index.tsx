import "./index.less";
import Markdown from "../../components/markdown";
import { Card, Space, Col, Row } from "antd";
import analyzeMd from "./analyze";
import bannerCss from "./banner";

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
      </Space>
    </div>
  );
}
