import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import RecentReview from './RecentReview.js';
import { Col, Layout, Button, Form, Rate, Input } from 'antd';
import CommentList from './CommentList';
import axios from 'axios';
const { Header, Footer, Sider, Content } = Layout;
const {TextArea} = Input

class Info_Trail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { newComment: null };
  }
  handleInputValue(val) {
    this.setState({ newComment: val });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.setState({
        // });
        // let commentData = JSON.stringify({ comment: this.state.newComment });
        // axios.post('/comment', commentData, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Col span={12} id="id_trailinfo_info_trail">
        <Layout>
          <Header className="cl_trailinfo_header">
            {this.props.fakedata[0].title}
          </Header>
          <RecentReview review={this.props.fakedata[0].review}></RecentReview>
          <Footer className="cl_trailinfo_footer" id="id_trialinfo_commentBox">
            <Form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <Form.Item>
                {
                  getFieldDecorator('comment',{
                    rules: [
                      {
                        required: true,
                        message: 'Please input comment!',
                      },
                    ],
                  })(<Input
                    type="textarea"
                    onChange={e => {
                      let newComment = e.target.value;
                      this.handleInputValue(newComment);
                    }}
                  />)
                }
                
              </Form.Item>

              <Form.Item>
              {
                  getFieldDecorator('rate',{
                    rules: [
                      {
                        required: true,
                        message: 'Please input rate!',
                      },
                    ],
                  })(<Rate />)
                }
                
                {/* {getFieldDecorator('rate', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Trail name!',
                    }
                  ],
                })(<Rate />)} */}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  댓글 달기
                </Button>
              </Form.Item>
            </Form>

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

export default Form.create({ name: 'normal_info_trail' })(Info_Trail);
