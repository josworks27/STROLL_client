import React, { Component } from 'react';
import LoginInfo from '../component/Login/LoginInfo';

class login_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <LoginInfo isLogin={this.props.isLogin}> </LoginInfo>;
  }
}

export default login_page;
