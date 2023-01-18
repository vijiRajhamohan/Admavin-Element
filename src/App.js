import React, { useState } from "react";

import { Transfer } from "antd";

const element = [
  { key: "0", title: "Title 0" },
  { key: "1", title: "Title 1" },
  { key: "2", title: "Title 2" },
  { key: "3", title: "Title 3" },
  { key: "4", title: "Title 4" },
  { key: "5", title: "Title 5" },
  { key: "6", title: "Title 6" },
];

export default function App() {
  // To set target keys
  const [targetKeys, setTargetKeys] = useState(element);

  // Contains the selected keys
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <div
      style={{
        display: "block",
        padding: 30,
        textAlign: "center",
      }}
    >
      <h4>ReactJS Ant-Design Transfer Component</h4>
      <Transfer
        style={{
          display: "flex",
          padding: 30,
          justifyContent: "center",
        }}
        dataSource={element}
        titles={["Bucket 1", " Bucket 2"]}
        render={(item) => item.title}
        operations={["ADD", "Remove"]}
        selectedKeys={selectedKeys}
        targetKeys={targetKeys}
        onChange={(nextTargetKeys) => {
          setTargetKeys(nextTargetKeys);
        }}
        onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
          setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
        }}
      />
    </div>
  );
}
