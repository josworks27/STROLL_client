import React, { Component } from 'react';
import TrailListElement from './TrailListElement';
import EveryTrails from './EveryTrails';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';

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
      <Content style={{ minHeight: '100vh' }}>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '20px 0' }}>
              <Breadcrumb.Item className="cl_trailTag">
                With pet
              </Breadcrumb.Item>
            </Breadcrumb>
            <Row id="id_Mypage_main_row">
              <Col span={8} className="cl_Mypage_main_content">
                {trail.map(el => {
                  return <TrailListElement key={'trail' + el} trail={el} />;
                })}
              </Col>
              <Col span={16} className="cl_Mypage_main_content">
                {/* 지도가 올 자리 */}
                <EveryTrails></EveryTrails>
              </Col>
            </Row>
          </Content>
        </Layout>
        
      </Content>
    );
  }
}
