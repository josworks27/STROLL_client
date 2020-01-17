import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RecentReview from './RecentReview.js';
import { Col, Layout, Button } from 'antd';
import CommentList from './CommentList';
const { Header, Footer, Sider, Content } = Layout;

class Info_Trail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col span={12} id="id_trailinfo_info_trail">
        <Layout>
          <Header className="cl_trailinfo_header">조용한 산책로</Header>
          <RecentReview></RecentReview>
          <Footer className="cl_trailinfo_footer" id="id_trialinfo_commentBox">
            <input type="textarea"></input>
            <Button>댓글 달기</Button>
            <CommentList></CommentList>
          </Footer>
        </Layout>
        <Link to='/main'>
          <Button id="id_button_home">홈으로</Button>
        </Link>
      </Col>
    );
  }
}

export default Info_Trail;
