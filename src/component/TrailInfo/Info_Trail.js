import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RecentReview from './RecentReview.js';
import { Col, Layout, Button } from 'antd';
import CommentList from './CommentList';
import axios from 'axios';
const { Header, Footer, Sider, Content } = Layout;

class Info_Trail extends Component {
  constructor(props) {
    super(props);
    this.state = { newComment: null };
  }
  handleInputValue(val) {
    this.setState({ newComment: val });
  }
  handleCommentBtn() {
    let commentData = JSON.stringify({ comment: this.state.newComment });

    axios.post('/comment', commentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  render() {
    return (
      <Col span={12} id="id_trailinfo_info_trail">
        <Layout>
          <Header className="cl_trailinfo_header">
            {this.props.fakedata[0].title}
          </Header>
          <RecentReview review={this.props.fakedata[0].review}></RecentReview>
          <Footer className="cl_trailinfo_footer" id="id_trialinfo_commentBox">
            <input
              type="textarea"
              onChange={e => {
                let newComment = e.target.value;
                this.handleInputValue(newComment);
              }}
            ></input>
            <Button
              onClick={() => {
                this.handleCommentBtn();
              }}
            >
              댓글 달기
            </Button>
            <CommentList
              comments={this.props.fakedata[0].comments}
            ></CommentList>
          </Footer>
        </Layout>
        <Link to="/main">
          <Button id="id_button_home">홈으로</Button>
        </Link>
      </Col>
    );
  }
}

export default Info_Trail;
