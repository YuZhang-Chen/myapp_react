import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Divider, Radio, Select, DatePicker, InputNumber, Switch, Space } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Option } = Select;

const FormCase = () => {
  const [form] = Form.useForm();
  const [layout, setLayout] = useState('horizontal');
  const [requiredMark, setRequiredMark] = useState(true);

  const onFinish = (values) => {
    console.log('表單提交:', values);
    alert('表單提交成功!\n' + JSON.stringify(values, null, 2));
  };

  const onReset = () => {
    form.resetFields();
  };

  const formLayouts = {
    horizontal: {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    },
    vertical: {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    },
    inline: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>表單 (Form) 展示</h1>
      <p>Form 表單，用於收集、校驗和提交數據。</p>
      
      <Card style={{ marginBottom: 24 }}>
        <Divider orientation="left">配置選項</Divider>
        <Space direction="vertical">
          <div>
            <span style={{ marginRight: 8 }}>表單布局:</span>
            <Radio.Group value={layout} onChange={(e) => setLayout(e.target.value)}>
              <Radio.Button value="horizontal">水平</Radio.Button>
              <Radio.Button value="vertical">垂直</Radio.Button>
              <Radio.Button value="inline">內聯</Radio.Button>
            </Radio.Group>
          </div>
          
          <div>
            <span style={{ marginRight: 8 }}>必填標記:</span>
            <Switch checked={requiredMark} onChange={setRequiredMark} />
          </div>
        </Space>
      </Card>
      
      <Card>
        <Divider orientation="left">基本表單</Divider>
        <Form
          {...formLayouts[layout]}
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout={layout}
          requiredMark={requiredMark ? true : false}
        >
          <Form.Item
            label="用戶名"
            name="username"
            rules={[{ required: true, message: '請輸入用戶名!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用戶名" />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            rules={[{ required: true, message: '請輸入密碼!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密碼" />
          </Form.Item>

          <Form.Item
            label="電子郵件"
            name="email"
            rules={[
              { required: true, message: '請輸入郵箱!' },
              { type: 'email', message: '請輸入有效的郵箱地址!' }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="電子郵件" />
          </Form.Item>

          <Form.Item
            label="電話"
            name="phone"
          >
            <Input prefix={<PhoneOutlined />} placeholder="電話號碼" />
          </Form.Item>

          <Form.Item
            label="性別"
            name="gender"
          >
            <Select placeholder="請選擇性別">
              <Option value="male">男</Option>
              <Option value="female">女</Option>
              <Option value="other">其他</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="出生日期"
            name="birthday"
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="年齡"
            name="age"
          >
            <InputNumber min={1} max={120} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: layout === 'horizontal' ? 4 : 0 }}
          >
            <Checkbox>記住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: layout === 'horizontal' ? 4 : 0 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
        
        <Divider orientation="left">表單校驗</Divider>
        <Form
          layout="vertical"
          name="validation_form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="用戶名"
            name="username"
            rules={[
              { required: true, message: '請輸入用戶名!' },
              { min: 3, message: '用戶名至少3個字符!' },
              { max: 20, message: '用戶名最多20個字符!' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            rules={[
              { required: true, message: '請輸入密碼!' },
              { min: 6, message: '密碼至少6個字符!' },
              { 
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, 
                message: '密碼需包含大小寫字母和數字!' 
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="確認密碼"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: '請確認密碼!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('兩次輸入的密碼不一致!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FormCase;