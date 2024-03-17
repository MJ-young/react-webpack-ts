const bannerCss = `
\`\`\`css
/*
            *author:MJ
            *time:2024/3/16
            */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
}
.App {
  text-align: center;
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
}
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin 20s linear infinite;
  }
}
.App-header {
  align-items: center;
  background-color: #282c34;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
}
.App-link {
  color: #61dafb;
}
@keyframes App-logo-spin {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
.loadmore {
  height: 32;
  line-height: 32px;
  margin-top: 10px;
  text-align: center;
}
.less-content {
  color: #000;
  font-size: large;
}
.less-content p:first-letter,
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
.logo-box {
  color: #f0f2f5;
  font-size: 24px;
  overflow: hidden;
  padding: 20px;
  text-align: center;
}
.logo-box .logo {
  height: 50px;
  width: 50px;
}
.layout {
  background-color: #f0f2f5;
  height: 100vh;
  overflow: hidden;
}
.header {
  padding: 5px;
}
.content,
.header {
  background-color: #fff;
}
.content {
  border-radius: 16px;
  margin: 24px 16px;
  min-height: 280px;
  overflow: auto;
  padding: 20px;
}
.btn {
  font-size: 16px;
  height: 64px;
  width: 64px;
}
/*# sourceMappingURL=main.d3a67724.css.map*/
\`\`\`
`

export default bannerCss;