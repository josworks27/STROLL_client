import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export default class TrailListElement extends Component {
  render() {
    return (
      <Link to="/trailinfo">
        <Row id="id_Mypage_traillistElement">
          {/* <Link to='/trailinfo'> */}
          <Col span={18} className="cl_trail">
            {this.props.trail}
          </Col>
          {/* </Link> */}
        </Row>
      </Link>

    );
  }
}