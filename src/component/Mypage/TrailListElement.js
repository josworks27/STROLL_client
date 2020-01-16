import React, { Component } from 'react';
import { Row, Col } from 'antd';

// const { Header, Content, Footer, Sider } = Layout;
export default class TrailListElement extends Component {
  render() {
    return (
      <Row id='id_Mypage_traillistElement'>
        <Col span={18} className="cl_trail">{this.props.trail}</Col>
      </Row>
    );
  }
}
