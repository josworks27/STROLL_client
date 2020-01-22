import React, { Component } from 'react';
import LoginInfo from '../component/Login/LoginInfo';
import '../component/Login/Login.css';

class login_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      isLogin: this.props.isLogin,
    };
  }
  render() {
    return (
      <LoginInfo
        isLogin={this.props.isLogin}
        handleIsloginState={this.props.handleIsloginState}
      ></LoginInfo>
    );
  }
}

export default login_page;
