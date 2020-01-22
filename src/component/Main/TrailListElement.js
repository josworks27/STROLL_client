import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class TrailListElement extends Component {
  render() {
    return (
      <Link to="/trailinfo">
        <Row id="id_Mypage_traillistElement">
          {/* <Link to='/trailinfo'> */}

          <Col
            span={18}
            className="cl_trail"
            onClick={() => this.props.handleSelectTrail(this.props.trail)}
          >
            <img
              className="cl_TrailEl_img"
              src="https://ifh.cc/g/ExLaH.png"
            ></img>
            <div className="cl_TrailEl_bar"></div>
            <div className="cl_TrailEl_text">
              {this.props.trail.title}
              {this.props.trail.username}
            </div>
            <Icon type="right" className="cl_TrailEl_icon" />
          </Col>
          {/* </Link> */}
        </Row>
      </Link>
    );
  }
}
