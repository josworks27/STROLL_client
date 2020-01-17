import React, { Component } from 'react';
import LoginInfo from '../component/Login/LoginInfo'

class login_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      isLogin: this.props.isLogin
    };
  }
  render() {
    const {location, isLogin} = this.state;
    return (
        <LoginInfo location={location} isLogin={isLogin}> </LoginInfo>
    );
  }
}

export default login_page;