import React, { Component } from 'react';
import LoginInfo from './component/Main/LoginInfo';
import SignUpInfo from './component/Signup/SignUpInfo';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginInfo>Login</LoginInfo>
        <SignUpInfo>SignUp</SignUpInfo>
      </div>
    );
  }
}
