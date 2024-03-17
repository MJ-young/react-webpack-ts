// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/home";
import LessPage from "./views/less";
import WebpackPage from "./views/webpack";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import routes from "./router/router";
import "./common.less";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

interface MenuItem {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
}

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const routeItems: MenuItem[] = [];
  routes.forEach((item, index) => {
    routeItems.push({
      label: <Link to={item.path}>{item.label}</Link>,
      key: item.path,
      icon: item.icon,
    });
  });
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-box">
          <a href="https://reactjs.org/" target="_blank">
            <img
              src="https://img.icons8.com/color/48/000000/react-native.png"
              className="logo"
              alt="React logo"
            />
          </a>
          <div>{!collapsed ? "React+Webpack" : "RN"}</div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={routeItems}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="btn"
          />
        </Header>
        <Content className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/less" element={<LessPage />} />
            <Route path="/webpack" element={<WebpackPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
