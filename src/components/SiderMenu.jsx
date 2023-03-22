import React from "react";
import { Menu } from "antd";
import {
  CustomerServiceOutlined,
  DeploymentUnitOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

export default function SiderMenu() {
  const items = [
    { key: 1, label: "纯享", icon: <CustomerServiceOutlined /> },
    { key: 2, label: "哈哈哈", icon: <DeploymentUnitOutlined /> },
    { key: 3, label: "等等等", icon: <ExperimentOutlined /> },
  ];
  return (
    <div>
      <Menu
        mode="vertical"
        defaultSelectedKeys={["1"]}
        items={items}
        className="text-center flex flex-col gap-5"
        style={{
          backgroundColor: "rgba(249, 250, 251)",
          border: "none",
        }}
      />
    </div>
  );
}
