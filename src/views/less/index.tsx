import React from "react";
import "./index.less";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  feature: string;
  description: string;
  tags?: string[];
}

export default function LessPage() {
  // 设置表格的数据
  const data: DataType[] = [
    {
      key: "1",
      feature: "Variables",
      description:
        "Less allows you to use variables in your CSS. You can store colors, font stacks, or any CSS value you think you'll want to reuse.",
      tags: ["color", "font", "reuse"],
    },
    {
      key: "2",
      feature: "Mixins",
      description:
        "A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible.",
      tags: ["reuse", "flexible"],
    },
    {
      key: "3",
      feature: "Nested Rules",
      description:
        "Rather than constructing long selector names to specify inheritance, in Less you can simply nest selectors inside other selectors.",
      tags: ["inheritance", "nesting"],
    },
    {
      key: "4",
      feature: "Functions",
      description:
        "Less supports the use of functions to add logic to your stylesheets. Some of the functions are color manipulation, math functions, string functions, list functions, and more.",
      tags: ["color", "math", "string", "list", "logic"],
    },
    {
      key: "5",
      feature: "Namespaces",
      description:
        "Less allows you to group CSS rules under a namespace, which makes it easier to organize your code and make it more readable.",
      tags: ["organization", "readability"],
    },
    {
      key: "6",
      feature: "Scoping",
      description:
        "Less allows you to scope your CSS to a specific selector. This is particularly useful when you are working with larger codebases.",
      tags: ["selector", "scope", "codebase"],
    },
    {
      key: "7",
      feature: "Comments",
      description: "Less supports both single-line and multi-line comments.",
      tags: ["comment", "single-line", "multi-line"],
    },
  ];
  // 设置表格的列
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Feature",
      dataIndex: "feature",
      key: "feature",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: string[]) => (
        <Space>
          {tags?.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "color") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </Space>
      ),
    },
  ];

  return (
    // 使用相关less，编写页面介绍less的使用，尽可能使用less的特性并设置样式
    <div>
      <div className="less-content">
        <p>
          Less is a CSS pre-processor, meaning that it extends the CSS language,
          adding features that allow variables, mixins, functions and many other
          techniques that allow you to make CSS that is more maintainable,
          themable and extendable.
        </p>
      </div>
      {/* 介绍less的特性 */}
      <div className="less-features">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
