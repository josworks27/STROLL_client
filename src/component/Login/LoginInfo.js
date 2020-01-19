import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
    console.log('hello');
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        var loginData = {
          email: values.email,
          password: values.password,
        };
        axios
          .post('http://27bd42cc.ngrok.io/signin', loginData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(res => {
            // console.log("TOKEN", res)
            if (res.status === 200) {
              // 로그인 스테이트 true로 변경
              this.props.handleIsloginState();
              localStorage.setItem('cookie', res.data.token);
              console.log('local storage: ', localStorage.getItem('cookie'))
              // isLogin state가 true이면 /main으로 가도록 리디렉션
            } else if (res.status === 401) {
              alert('Invaild user !');
              console.log('Error 401');
            }
          })
          .catch(err => {
            alert('Invaild user !');
            throw err;
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
    if (!this.props.isLogin) {
      return (
        <div id="id_wrapper">
          <div className="cl_STROLL">STROLL 🍃</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
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
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <Alert
                message="Invaild user !"
                type="error"
                closable
                onClose={this.onClose}
              />
              Or
              <Link to="/signup"> register now!</Link>
            </Form.Item>
          </Form>
        </div>
      );
    } else {
      return <Redirect to="/main"></Redirect>;
    }
  }
}

export default Form.create({ name: 'normal_login' })(LoginInfo);
