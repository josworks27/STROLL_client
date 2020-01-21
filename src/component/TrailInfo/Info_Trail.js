//  Comment Post : /trails/:tag/:trailid/comment
//  Comment Post Body
//      body:{
//        "trailId": 2,
//        "comment": "걍 그래요",
//        "rating": 3
//      }
import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RecentReview from './RecentReview.js';
import { Col, Layout, Button, Form, Rate, Input } from 'antd';
import CommentList from './CommentList';
import axios from 'axios';
const { Header, Footer } = Layout;
const NGROK_URL = require('../../ngrokurl');

class Info_Trail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      commentList: JSON.parse(localStorage.currentTrail).comments,
      newComment: null,
    };
  }
  handleInputValue(val) {
    this.setState({ newComment: val });
  }
  handleSubmit = e => {
    e.preventDefault();
    var trailid = this.props.currentT[0].trail.id;
    var tag = this.props.currentT[0].trail.category.tag;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let commentData = {
          trailId: trailid,
          comment: values.comment,
          rating: values.rate,
        };
        axios
          .post(`${NGROK_URL}/trails/${tag}/${trailid}/comment`, commentData)
          .then(res => {
            if (res.status === 200) {
              console.log('코멘트 포스팅 성공', res.data);
              
              this.setState({
                commentList: this.state.commentList.concat(res.data),
              });
            } else {
              console.log('????????');
            }
          })
          .catch(err => {
            console.log('코멘트 포스팅 실패', err);
          });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    // const rateList = this.props.
    return (
      <Col span={12} id="id_trailinfo_info_trail">
        <Layout>
          <Header className="cl_trailinfo_header">REVIEW</Header>
          <RecentReview
            review={this.props.currentT[0].trail.review}
          ></RecentReview>
          <Footer className="cl_trailinfo_footer" id="id_trialinfo_commentBox">
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <Form.Item>
                {getFieldDecorator('comment', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input comment!',
                    },
                  ],
                })(
                  <Input
                    type="textarea"
                    onChange={e => {
                      let newComment = e.target.value;
                      this.handleInputValue(newComment);
                    }}
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('rate', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input rate!',
                    },
                  ],
                })(<Rate />)}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  댓글 달기
                </Button>
              </Form.Item>
            </Form>
            <CommentList comments={this.state.commentList}></CommentList>
          </Footer>
        </Layout>
        <Link to="/main">
          <Button id="id_button_home">홈으로</Button>
        </Link>
      </Col>
    );
  }
}

export default Form.create({ name: 'normal_info_trail' })(Info_Trail);
