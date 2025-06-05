import React, { useState } from 'react';
import { Select, Card, Divider, Space, Radio, Switch, Tag } from 'antd';

const { Option } = Select;

const SelectCase = () => {
  const [size, setSize] = useState('middle');
  const [loading, setLoading] = useState(false);
  const [allowClear, setAllowClear] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value === 'gold' ? 'gold' : 'green'}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>選擇器 (Select) 展示</h1>
      <p>Select 選擇器，用於在多個選項中選擇一個或多個。</p>
      
      <Card style={{ marginBottom: 24 }}>
        <Divider orientation="left">配置選項</Divider>
        <Space direction="vertical">
          <div>
            <span style={{ marginRight: 8 }}>尺寸:</span>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Radio.Button value="small">小</Radio.Button>
              <Radio.Button value="middle">中</Radio.Button>
              <Radio.Button value="large">大</Radio.Button>
            </Radio.Group>
          </div>
          
          <div>
            <span style={{ marginRight: 8 }}>載入狀態:</span>
            <Switch checked={loading} onChange={setLoading} />
          </div>
          
          <div>
            <span style={{ marginRight: 8 }}>可清除:</span>
            <Switch checked={allowClear} onChange={setAllowClear} />
          </div>
          
          <div>
            <span style={{ marginRight: 8 }}>可搜索:</span>
            <Switch checked={showSearch} onChange={setShowSearch} />
          </div>
        </Space>
      </Card>
      
      <Card>
        <Divider orientation="left">基本選擇器</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            defaultValue="lucy"
            style={{ width: 200 }}
            onChange={handleChange}
            size={size}
            loading={loading}
            allowClear={allowClear}
            showSearch={showSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Select
            defaultValue="lucy"
            style={{ width: 200 }}
            disabled
            size={size}
          >
            <Option value="lucy">Lucy</Option>
          </Select>
        </Space>

        <Divider orientation="left">多選選擇器</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            mode="multiple"
            allowClear={allowClear}
            style={{ width: '100%' }}
            placeholder="請選擇"
            defaultValue={['red', 'green']}
            onChange={handleChange}
            size={size}
            loading={loading}
            showSearch={showSearch}
            options={[
              { value: 'red', label: '紅色' },
              { value: 'green', label: '綠色' },
              { value: 'blue', label: '藍色' },
              { value: 'gold', label: '金色' },
            ]}
          />

          <Select
            mode="multiple"
            size={size}
            placeholder="自定義標籤效果"
            tagRender={tagRender}
            defaultValue={['gold', 'green']}
            style={{ width: '100%' }}
            options={[
              { value: 'gold', label: '金色' },
              { value: 'lime', label: '酸橙色' },
              { value: 'green', label: '綠色' },
              { value: 'cyan', label: '青色' },
            ]}
          />
        </Space>

        <Divider orientation="left">動態生成選項</Divider>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            style={{ width: '100%' }}
            placeholder="動態生成選項"
            size={size}
            loading={loading}
            allowClear={allowClear}
            showSearch={showSearch}
          >
            {options.map(item => (
              <Option key={item.value} value={item.value}>{item.label}</Option>
            ))}
          </Select>
          
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="動態生成多選選項"
            size={size}
            loading={loading}
            allowClear={allowClear}
            showSearch={showSearch}
            options={options}
          />
        </Space>
      </Card>
    </div>
  );
};

export default SelectCase;