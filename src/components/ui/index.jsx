import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  BorderOutlined,
  LayoutOutlined,
  ColumnWidthOutlined,
  SlidersFilled,
  FormOutlined,
  EditOutlined,
  SelectOutlined,
} from '@ant-design/icons';
import UIShowcase from './UIshowCase';
import RadioCase from './RadioCase';
import FormCase from './FormCase';
import InputCase from './InputCase';
import SelectCase from './SelectCase';
import ButtonCase from './ButtonCase';
import FlexCase from './FlexCase';
import 'antd/dist/reset.css';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AntIndex = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('overview');

  const renderContent = () => {
    switch (currentComponent) {
      case 'overview':
        return <UIShowcase />;
      case 'buttons':
        return <ButtonCase />;
      case 'flex':
        return <FlexCase />;
      case 'radio':
        return <RadioCase />;
      case 'form':
        return <FormCase />;
      case 'input':
        return <InputCase />;
      case 'select':
        return <SelectCase />;
      default:
        return <UIShowcase />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ color: 'white', padding: 16, textAlign: 'center', fontWeight: 'bold' }}>
          {collapsed ? 'UI' : 'AntD Showcase'}
        </div>
        <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['overview']}
          defaultOpenKeys={['ui-elements', 'form-elements']}
          onSelect={({ key }) => setCurrentComponent(key)}
        >
          <Menu.Item key="overview" icon={<AppstoreOutlined />}>
            總覽
          </Menu.Item>
          <SubMenu key="ui-elements" icon={<MenuOutlined />} title="基礎元素">
            <Menu.Item key="buttons" icon={<BorderOutlined />}>
              按鈕 (Button)
            </Menu.Item>
            <Menu.Item key="flex" icon={<LayoutOutlined />}>
              彈性佈局 (Flex)
            </Menu.Item>
            <Menu.Item key="space" icon={<ColumnWidthOutlined />}>
              間距 (Space)
            </Menu.Item>
            <Menu.Item key="radio" icon={<SlidersFilled />}>
              單選 (Radio)
            </Menu.Item>
            <Menu.Item key="menu" icon={<MenuOutlined />}>
              選單 (Menu)
            </Menu.Item>
          </SubMenu>
          <SubMenu key="form-elements" icon={<FormOutlined />} title="表單元素">
            <Menu.Item key="form" icon={<FormOutlined />}>
              表單 (Form)
            </Menu.Item>
            <Menu.Item key="input" icon={<EditOutlined />}>
              輸入框 (Input)
            </Menu.Item>
            <Menu.Item key="select" icon={<SelectOutlined />}>
              選擇器 (Select)
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', paddingLeft: 16, fontWeight: 'bold' }}>
          <MenuUnfoldOutlined style={{ marginRight: 8 }} />
          Ant Design Demo - {
            currentComponent === 'overview' ? '總覽' : 
            currentComponent === 'radio' ? '單選' : 
            currentComponent === 'form' ? '表單' : 
            currentComponent === 'input' ? '輸入框' : 
            currentComponent === 'select' ? '選擇器' : ''
          }
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', overflow: 'auto' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AntIndex;