import React, { Component } from 'react';
import TrailListElement from './TrailListElement';
import Map from './Map';
import { Layout, Breadcrumb, Row, Col } from 'antd';
const { Content } = Layout;

export default class TrailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      location: this.props.location,
      isLogin: this.props.isLogin,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    // axios요청으로 리스트 받아오기
    const { location } = this.state;
    let currentTheme = this.props.currentTheme;
    let cT = !currentTheme ? 'Every Trails' : currentTheme;
    let traillist = this.props.filteredTrailList;

    return (
      <Content style={{ minHeight: '100vh' }} className="cl_mypage_info">
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '20px 0' }}>
              <Breadcrumb.Item className="cl_trailTag ">{cT}</Breadcrumb.Item>
            </Breadcrumb>
            <Row id="id_Mypage_main_row">
              <Col span={8} className="cl_Mypage_main_content ">
                {traillist.map((trail, index) => (
                  <TrailListElement
                    key={'trail' + trail + index}
                    trail={trail}
                    handleSelectTrail={this.props.handleSelectTrail}
                  />
                ))}
              </Col>

              <Col span={16} className="cl_Mypage_main_map">
                <Map location={location} traillist={traillist}></Map>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Content>
    );
  }
}
