import React, { useState } from 'react';
import { Flex, Divider, Radio, Card } from 'antd';

const FlexCase = () => {
  const [layout, setLayout] = useState('row');
  const [justify, setJustify] = useState('flex-start');

  return (
    <div style={{ padding: 32 }}>
      <h1>彈性佈局 (Flex) 展示</h1>

      <Divider orientation="left">佈局方向</Divider>
      <Radio.Group
        value={layout}
        onChange={(e) => setLayout(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio value="row">橫向排列</Radio>
        <Radio value="column">直向排列</Radio>
      </Radio.Group>

      <Divider orientation="left">對齊方式</Divider>
      <Radio.Group
        value={justify}
        onChange={(e) => setJustify(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio value="flex-start">起始對齊</Radio>
        <Radio value="center">置中對齊</Radio>
        <Radio value="flex-end">結尾對齊</Radio>
        <Radio value="space-between">兩端對齊</Radio>
      </Radio.Group>

      <Divider orientation="left">Flex 展示</Divider>
      <Card>
        <Flex
          vertical={layout === 'column'}
          justify={justify}
          gap="middle"
          style={{ minHeight: 200, border: '1px dashed #ccc', padding: 24 }}
        >
          <div style={{ background: '#91d5ff', padding: 12, minWidth: 100 }}>區塊一</div>
          <div style={{ background: '#ffccc7', padding: 12, minWidth: 100 }}>區塊二</div>
          <div style={{ background: '#d3f261', padding: 12, minWidth: 100 }}>區塊三</div>
        </Flex>
      </Card>
    </div>
  );
};

export default FlexCase;