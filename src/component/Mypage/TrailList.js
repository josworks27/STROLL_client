import React, { Component } from 'react';
import TrailListElement from './TrailListElement';
import EveryTrails from './EveryTrails';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let trail = ['pet trail1', 'pet trail2', 'pet trail3', 'pet trail4'];
export default class TrailList extends Component {
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
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '20px 0' }}>
              <Breadcrumb.Item className="cl_trailTag">
                With pet
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
              <div className="cl_trails">
                {trail.map(el => {
                  return <TrailListElement key={'trail' + el} trail={el} />;
                })}
              </div>
            </div>
          </Content>
        </Layout>
        <EveryTrails></EveryTrails>
      </Layout>
    );
  }
}
