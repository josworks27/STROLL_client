import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecentReview from './RecentReview.js';
import {
  Col,
  Icon,
  Layout,
  Button,
  Form,
  Rate,
  Input,
  Comment,
  Avatar,
  List,
} from 'antd';

import CommentList from './CommentList';
import axios from 'axios';
const { Header, Footer } = Layout;
const NGROK_URL = require('../../ngrokurl');
const { TextArea } = Input;
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
        let commentData = {
          trailId: trailid,
          comment: values.comment,
          rating: values.rate,
        };
        axios
          .post(`${NGROK_URL}/trails/${tag}/${trailid}/comment`, commentData)
          .then(res => {
            if (res.status === 200) {
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
    return (
      <Col span={12} id="id_trailinfo_info_trail">
        <Layout className="cl_trailinfo_layout">
          <Header className="cl_trailinfo_header">
            {this.props.currentT[0].trail.title}
          </Header>
          <RecentReview
            className="cl_trailinfo_review"
            review={this.props.currentT[0].trail.review}
          ></RecentReview>
          <Footer className="cl_trailinfo_footer" id="id_trialinfo_commentBox">
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <Form.Item>
                {getFieldDecorator('rate', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input rate!',
                    },
                  ],
                })(<Rate className="cl_infoTrail_rating" />)}
              </Form.Item>
              {<Avatar icon="user" className="cl_infotrail_avatar" />}
              <Form.Item className="cl_infotrail_input">
                {getFieldDecorator('comment', {
                  rules: [
                    {
                      // required: true,
                      // message: 'Please input comment!',
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

              <Form.Item className="cl_infotrail_btn_form">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="cl_infotrail_btn"
                >
                  <Icon type="mail" className="cl_infotrail_send" />
                </Button>
              </Form.Item>
            </Form>
            <CommentList comments={this.state.commentList}></CommentList>
          </Footer>
        </Layout>
        <Link to="/main" id="id_button_home">
          <Icon type="home" />
        </Link>
      </Col>
    );
  }
}

export default Form.create({ name: 'normal_info_trail' })(Info_Trail);
