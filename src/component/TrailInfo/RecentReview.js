import React, { Component } from 'react';
import './style.css';
import { Layout } from 'antd';
const { Content } = Layout;

class RecentReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content className="cl_trailinfo_content" id="id_trialinfo_review">
        {this.props.review}
      </Content>
    );
  }
}

export default RecentReview;
