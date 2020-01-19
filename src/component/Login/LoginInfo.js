import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Icon, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.css';
import './LoginInfo.css';

import axios from 'axios';

class LoginInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { email: null, password: null };
  }
  // 서브밋 메소드
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var loginData = JSON.stringify(values);
        axios
          .post('/signin', loginData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(res => {
            if (res.status === 200) {
              // 로그인 스테이트 true로 변경
              this.props.handleIsloginState();
              // TODO: isLogin state가 true이면 /main으로 가도록 리디렉션
            }
          });
      }
    });
  };
  // 인풋값 매소드
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  // 얼러트 매소드
  onClose = e => {
    console.log(e, 'I was closed.');
  };
  render() {

    console.log(this.props.isLogin);

    const { getFieldDecorator } = this.props.form;
    return (
      <div id="id_wrapper">
        <div className="cl_STROLL">STROLL 🍃</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="email"
                onChange={this.handleInputValue('email')}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
                onChange={this.handleInputValue('password')}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {this.props.isLogin ? (
              <Link to="/main">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Link>
            ) : (
              <Link to="/">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                  {/* TODO: 현재는 프롭스의 상태에 따라 경고창을 띄워 그냥 접속시에도 보이지만  
                            나중에는 스테이터스 코드에 따른 분기를 처리해 상황에 따라 경고창을 띄우도록 한다.*/}
                  <Alert
                    message="Invaild user !"
                    type="error"
                    closable
                    onClose={this.onClose}
                  />
                </Button>
              </Link>
            )}
            Or
            <Link to="/signup"> register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(LoginInfo);
