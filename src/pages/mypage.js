import React, { Component } from 'react';
import ThemeList from '../component/Mypage/ThemeList';
import TrailList from '../component/Mypage/TrailList';
import { Button } from 'antd';
import './mypage.css';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import 'antd/dist/antd.css';
// import './LoginInfo.css';
// import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class mypage_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cl_mypage">
        <ThemeList> </ThemeList>
        <TrailList> </TrailList>
        <Button type="primary" className="cl_addTrailBtn">
          Add Trail
        </Button>
      </div>
    );
  }
}

export default mypage_page;
