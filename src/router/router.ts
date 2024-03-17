import HomePage from "../views/home";
import LessPage from "../views/less";
import WebpackPage from "../views/webpack";
import { HeartOutlined } from '@ant-design/icons'
import React from "react";


const routes = [
    {
        path: '/',
        component: HomePage,
        label: 'Home',
        icon: React.createElement(HeartOutlined, null)
    },
    {
        path: '/less',
        component: LessPage,
        label: 'Less',
        icon: React.createElement(HeartOutlined, null)
        // icon: <HeartOutlined />,
    },
    {
        path: '/webpack',
        component: WebpackPage,
        label: 'Webpack',
        icon: React.createElement(HeartOutlined, null)
        // icon: <HeartOutlined />,
    },
    ] 
    
export default routes;