/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
const URL = require('../../ngrokurl');

class LoginInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { email: null, password: null };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var loginData = {
          email: values.email,
          password: values.password,
        };

        axios
          .post(`${URL}/signin`, loginData)
          .then(res => {
            if (res.status === 200) {
              this.props.handleIsloginState();
              localStorage.setItem('cookie', res.data.token);
            }
          })
          .catch(err => {
            this.error();
            throw err;
          });
      }
    });
  };

  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };

  onClose = e => {
    console.log(e, 'I was closed.');
  };
  error = () => {
    message.error('Incorrct email or password !');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    if (!this.props.isLogin) {
      return (
        <div id="id_wrapper">
          <div className="cl_STROLL">
            <img className="cl_logo_img" src="https://ifh.cc/g/Tkbhj.png"></img>
            STROLL
          </div>
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
