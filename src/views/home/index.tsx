import "./index.less";
import { List, Avatar, Skeleton, Button } from "antd";
import React, { useState, useEffect } from "react";
interface Item {
  name: string;
  logo: string;
  loading: boolean;
  description?: string;
  url: string;
}

const listData: Item[] = [
  {
    name: "Less",
    logo: "https://img.icons8.com/windows/48/less-logo.png",
    loading: false,
    description:
      "Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.",
    url: "https://less.bootcss.com/",
  },
  {
    name: "Webpack",
    logo: "https://img.icons8.com/color/48/000000/webpack.png",
    loading: false,
    description:
      "Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.",
    url: "https://webpack.js.org/",
  },
  {
    name: "React",
    logo: "https://img.icons8.com/color/48/000000/react-native.png",
    loading: false,
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    url: "https://reactjs.org/",
  },
];
const count = 3;

export default function HomePage() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Item[]>([]);
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    setList(listData);
    setData(listData);
    setInitLoading(false);
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...Array(count)].map(() => ({
          loading: true,
          name: "",
          logo: "",
          description: "",
          url: "",
        }))
      )
    );
    setTimeout(() => {
      const newData = data.concat(listData);
      setList(newData);
      setData(newData);
      setLoading(false);
    }, 1000);
  };
  const loadMore =
    !initLoading && !loading ? (
      <div className="loadmore">
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    // 介绍该项目的项目结构使用到的技术栈Less、Webpack、React、Antd
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.logo} />}
              title={<a href={item.url}>{item.name}</a>}
              description={item.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
