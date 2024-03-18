const bannerCss = `
\`\`\`css
/*
            *author:MJ
            *time:2024/3/16
            */
// 原始src/views/webpack/index.less
@font-size-lg: 30px;
@font-size-md: 24px;
@font-size-sm: 22px;

.title {
    font-size: @font-size-lg;
    font-weight: bold;
    color: royalblue;
    margin: 20px 0;
    text-align: center;
}
.wp-title {
    font-size: @font-size-md;
    font-weight: bold;
    margin: 5px 0;
  }
  .wp-desc {
    font-size: @font-size-sm;
  }
// less-loader编译后

.title {
  font-size: 30px;
}
.title {
  color: #4169e1;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
}
.wp-title {
  font-size: 24px;
  font-weight: 700;
  margin: 5px 0;
}
.wp-desc {
  font-size: 22px;
}
/*# sourceMappingURL=main.d3a67724.css.map*/
\`\`\`
`;

export default bannerCss;
