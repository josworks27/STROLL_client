import React, { Component } from 'react';
import SignUpInfo from '../component/Signup/SignUpInfo';
import '../component/Signup/Signup.css';
class signup_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SignUpInfo></SignUpInfo>;
  }
}

export default signup_page;
