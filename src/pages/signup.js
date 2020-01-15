import React, { Component } from 'react';
import SignUpInfo from '../component/Signup/SignUpInfo';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import 'antd/dist/antd.css';
// import './LoginInfo.css';
// import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class signup_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    
    return (
        <SignUpInfo></SignUpInfo>
    );
  }
}

export default signup_page;