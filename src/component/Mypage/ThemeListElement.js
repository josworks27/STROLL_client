import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class ThemeListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    console.log(this.props.tag);
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <span>{this.props.tag}</span>
        </Menu.Item>
      </Menu>

      //   <Layout style={{ minHeight: '100vh' }}>
      //     <Sider
      //       collapsible
      //       collapsed={this.state.collapsed}
      //       onCollapse={this.onCollapse}
      //     ></Sider>
      //     <div className="logo" />
      //   </Layout>
    );
  }
}
