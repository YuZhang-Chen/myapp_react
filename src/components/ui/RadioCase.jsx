import React, { useState } from 'react';
import { Radio, Space, Card, Divider } from 'antd';

const RadioCase = () => {
  const [value1, setValue1] = useState('a');
  const [value2, setValue2] = useState('1');
  const [value3, setValue3] = useState('apple');
  const [size, setSize] = useState('middle');

  const options = [
    { label: '蘋果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape', disabled: true },
  ];

  return (
    <div style={{ padding: 32 }}>
      <h1>單選 (Radio) 展示</h1>
      <p>Radio 單選按鈕用於在多個選項中選擇一個。</p>
      
      <Card style={{ marginBottom: 24 }}>
        <Divider orientation="left">基本單選按鈕</Divider>
        <Space direction="vertical">
          <Radio>單選按鈕</Radio>
          <Radio disabled>禁用狀態</Radio>
        </Space>
        
        <Divider orientation="left">單選按鈕組</Divider>
        <Radio.Group value={value1} onChange={(e) => setValue1(e.target.value)}>
          <Radio value="a">選項 A</Radio>
          <Radio value="b">選項 B</Radio>
          <Radio value="c">選項 C</Radio>
          <Radio value="d" disabled>選項 D (禁用)</Radio>
        </Radio.Group>
        
        <Divider orientation="left">單選按鈕組 - 排列方向</Divider>
        <Radio.Group value={value2} onChange={(e) => setValue2(e.target.value)}>
          <Space direction="vertical">
            <Radio value="1">選項 1</Radio>
            <Radio value="2">選項 2</Radio>
            <Radio value="3">選項 3</Radio>
            <Radio value="4">選項 4</Radio>
          </Space>
        </Radio.Group>
      </Card>
      
      <Card>
        <Divider orientation="left">按鈕風格</Divider>
        <Space direction="vertical">
          <div>
            <span style={{ marginRight: 8 }}>按鈕尺寸:</span>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio.Button value="small">小</Radio.Button>
              <Radio.Button value="middle">中</Radio.Button>
              <Radio.Button value="large">大</Radio.Button>
            </Radio.Group>
          </div>
          
          <Radio.Group 
            defaultValue="a" 
            size={size} 
            style={{ marginTop: 16 }}
          >
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d" disabled>Chengdu</Radio.Button>
          </Radio.Group>
          
          <Radio.Group 
            defaultValue="a" 
            size={size} 
            buttonStyle="solid"
            style={{ marginTop: 16 }}
          >
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d" disabled>Chengdu</Radio.Button>
          </Radio.Group>
        </Space>
        
        <Divider orientation="left">帶選項的單選按鈕組</Divider>
        <Radio.Group 
          options={options} 
          onChange={(e) => setValue3(e.target.value)} 
          value={value3} 
        />
        <br /><br />
        <Radio.Group 
          options={options} 
          onChange={(e) => setValue3(e.target.value)} 
          value={value3} 
          optionType="button" 
        />
        <br /><br />
        <Radio.Group 
          options={options} 
          onChange={(e) => setValue3(e.target.value)} 
          value={value3} 
          optionType="button" 
          buttonStyle="solid"
        />
      </Card>
    </div>
  );
};

export default RadioCase;