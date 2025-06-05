import { 
  Button, 
  Divider, 
  Space, 
  Flex, 
  Card, 
  Col, 
  Row, 
  Radio, 
  Menu, 
  Form, 
  Input, 
  Select 
} from 'antd';
import { 
  AppstoreOutlined, 
  MailOutlined, 
} from '@ant-design/icons';

const { Option } = Select;

const UIShowcase = () => {
  return (
    <div style={{ padding: 32 }}>
      <h1>Ant Design UI 元素總覽</h1>
      <p>點擊左側選單查看各個元素的詳細展示與互動</p>
      <Divider orientation="center">元素預覽</Divider>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card title="按鈕 (Button)" bordered={false}>
            <Space wrap>
              <Button type="primary">主要按鈕</Button>
              <Button>次要按鈕</Button>
              <Button type="dashed">虛線按鈕</Button>
              <Button danger>危險按鈕</Button>
            </Space>
          </Card>
        </Col>
        
        <Col span={8}>
          <Card title="彈性佈局 (Flex)">
            <Flex gap="small">
              <div style={{ background: '#91d5ff', padding: 8, flex: 1 }}>Flex 1</div>
              <div style={{ background: '#ffccc7', padding: 8, flex: 1 }}>Flex 2</div>
              <div style={{ background: '#d3f261', padding: 8, flex: 1 }}>Flex 3</div>
            </Flex>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="間距 (Space)">
            <Space direction="vertical">
              <Space>
                <Button type="primary">按鈕 1</Button>
                <Button>按鈕 2</Button>
                <Button>按鈕 3</Button>
              </Space>
              <Space size="large">
                <Button type="primary">大間距</Button>
                <Button>示例</Button>
              </Space>
            </Space>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="單選 (Radio)">
            <Radio.Group defaultValue="a">
              <Radio value="a">選項 A</Radio>
              <Radio value="b">選項 B</Radio>
              <Radio value="c">選項 C</Radio>
            </Radio.Group>
            <Divider dashed />
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">選項 A</Radio.Button>
              <Radio.Button value="b">選項 B</Radio.Button>
              <Radio.Button value="c">選項 C</Radio.Button>
            </Radio.Group>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="選單 (Menu)">
            <Menu 
              mode="inline" 
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']} 
              style={{ width: '100%', maxHeight: 150, overflow: 'auto' }}
            >
              <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="導航一">
                <Menu.Item key="1">選項 1</Menu.Item>
                <Menu.Item key="2">選項 2</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="3" icon={<AppstoreOutlined />}>
                導航二
              </Menu.Item>
            </Menu>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="分隔線 (Divider)">
            <p>上方文字</p>
            <Divider>中間有文字</Divider>
            <p>下方文字</p>
            <Divider dashed />
            <div style={{ display: 'flex' }}>
              <span>文字 1</span>
              <Divider type="vertical" />
              <span>文字 2</span>
              <Divider type="vertical" />
              <span>文字 3</span>
            </div>
          </Card>
        </Col>
      </Row>

      <Divider orientation="left" style={{ marginTop: 24 }}>表單元素</Divider>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="輸入框 (Input)">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input placeholder="基本輸入框" />
              <Input.Password placeholder="密碼輸入框" />
              <Input.TextArea rows={2} placeholder="多行文本輸入" />
            </Space>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="選擇器 (Select)">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select defaultValue="option1" style={{ width: '100%' }}>
                <Option value="option1">選項一</Option>
                <Option value="option2">選項二</Option>
                <Option value="option3">選項三</Option>
              </Select>
              
              <Select
                mode="multiple"
                placeholder="請選擇多個選項"
                defaultValue={['option1']}
                style={{ width: '100%' }}
              >
                <Option value="option1">選項一</Option>
                <Option value="option2">選項二</Option>
                <Option value="option3">選項三</Option>
              </Select>
            </Space>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="表單 (Form)">
            <Form layout="vertical">
              <Form.Item
                label="用戶名"
                name="username"
                rules={[{ required: true, message: '請輸入用戶名!' }]}
              >
                <Input placeholder="請輸入用戶名" />
              </Form.Item>
              <Form.Item label="密碼" name="password">
                <Input.Password placeholder="請輸入密碼" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">提交</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UIShowcase;