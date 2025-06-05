import React, { useState } from 'react';
import { Button, Divider, Space, Radio } from 'antd';

const ButtonCase = () => {
  const [size, setSize] = useState('middle');

  return (
    <div style={{ padding: 32 }}>
      <h1>按鈕 (Button) 展示</h1>

      <Divider orientation="left">按鈕尺寸</Divider>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>

      <Divider orientation="left">按鈕類型</Divider>
      <Space direction="horizontal" size="middle" wrap>
        <Button type="primary" size={size}>主要按鈕</Button>
        <Button size={size}>次要按鈕</Button>
        <Button type="dashed" size={size}>虛線按鈕</Button>
        <Button type="link" size={size}>連結按鈕</Button>
        <Button type="text" size={size}>文字按鈕</Button>
        <Button danger size={size}>警告按鈕</Button>
      </Space>

      <Divider orientation="left">按鈕狀態</Divider>
      <Space direction="horizontal" size="middle">
        <Button type="primary" loading size={size}>
          載入中
        </Button>
        <Button type="primary" disabled size={size}>
          禁用
        </Button>
        <Button type="primary" ghost size={size}>
          Ghost
        </Button>
      </Space>
    </div>
  );
};

export default ButtonCase;