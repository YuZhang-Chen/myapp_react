import React, { useState } from 'react';
import { Input, Card, Divider, Space, Button, Tooltip, Radio } from 'antd';
import {
  UserOutlined,
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  SearchOutlined,
  AudioOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;
const { Search } = Input;
const { Group } = Input;

const InputCase = () => {
  const [size, setSize] = useState('middle');

  return (
    <div style={{ padding: 32 }}>
      <h1>輸入框 (Input) 展示</h1>
      <p>Input 輸入框，用於接收用戶輸入的內容。</p>
      
      <Card style={{ marginBottom: 24 }}>
        <Divider orientation="left">配置選項</Divider>
        <div>
          <span style={{ marginRight: 8 }}>輸入框尺寸:</span>
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Radio.Button value="small">小</Radio.Button>
            <Radio.Button value="middle">中</Radio.Button>
            <Radio.Button value="large">大</Radio.Button>
          </Radio.Group>
        </div>
      </Card>
      
      <Card>
        <Divider orientation="left">基本輸入框</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="基本使用" size={size} />
          <Input addonBefore="http://" addonAfter=".com" placeholder="網址" size={size} />
          <Input.Password placeholder="密碼輸入框" size={size} />
        </Space>

        <Divider orientation="left">帶圖標的輸入框</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            placeholder="帶圖標的輸入框"
            prefix={<UserOutlined />}
            size={size}
          />
          <Input
            placeholder="帶圖標的輸入框"
            suffix={<InfoCircleOutlined />}
            size={size}
          />
          <Input.Password
            placeholder="帶圖標的密碼框"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            size={size}
          />
        </Space>

        <Divider orientation="left">搜索框</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Search placeholder="基本搜索框" size={size} />
          <Search 
            placeholder="帶按鈕的搜索框" 
            enterButton
            size={size}
          />
          <Search
            placeholder="自定義按鈕的搜索框"
            enterButton="搜索"
            size={size}
            suffix={<AudioOutlined />}
            loading
          />
        </Space>

        <Divider orientation="left">文本域</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <TextArea rows={4} placeholder="多行文本輸入" />
          <TextArea
            showCount
            maxLength={100}
            placeholder="帶字數統計的多行文本輸入"
            style={{ height: 120 }}
          />
        </Space>

        <Divider orientation="left">輸入框組合</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Group size={size}>
            <Input style={{ width: 'calc(100% - 200px)' }} placeholder="網址" />
            <Input.Search style={{ width: '200px' }} defaultValue=".com" />
          </Group>
          
          <Group compact>
            <Input style={{ width: '20%' }} defaultValue="0571" />
            <Input style={{ width: '30%' }} defaultValue="26888888" />
          </Group>
          
          <Group compact>
            <Input style={{ width: 'calc(100% - 60px)' }} placeholder="搜索" />
            <Tooltip title="設置">
              <Button icon={<SettingOutlined />} />
            </Tooltip>
            <Button type="primary" icon={<SearchOutlined />} />
          </Group>
        </Space>
      </Card>
    </div>
  );
};

export default InputCase;