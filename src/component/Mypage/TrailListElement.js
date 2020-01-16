import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export default class TrailListElement extends Component {
  render() {
    return (
      <Row id="id_Mypage_traillistElement">
        <Link to="/trailinfo">
          <Col span={18} className="cl_trail" onClick={() => {}}></Col>
        </Link>
      </Row>
    );
  }
}
