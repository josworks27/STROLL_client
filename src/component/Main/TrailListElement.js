import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export default class TrailListElement extends Component {
  render() {
    return (
      <Link to="/trailinfo">
        <Row id="id_Mypage_traillistElement">
          {/* <Link to='/trailinfo'> */}
          <Col span={18} className="cl_trail" onClick={()=>this.props.handleSelectTrail(this.props.trail)}>
            {this.props.trail.title}
            {this.props.trail.username}
          </Col>
          {/* </Link> */}
        </Row>
      </Link>
    );
  }
}
