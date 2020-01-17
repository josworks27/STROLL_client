import React, { Component } from 'react';
import ThemeList from '../component/Mypage/ThemeList';
import TrailList from '../component/Mypage/TrailList';
import { Button, Layout } from 'antd';
import '../component/Mypage/mypage.css';
import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
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
      <Layout className="cl_mypage">
        <ThemeList></ThemeList>
        <Layout>
          <Header id="id_mypage_header"></Header>
          <Button type="primary" className="cl_addTrailBtn">
            <Link to="/addtrail">Add Trail</Link>
          </Button>
          <Button type="primary" className="cl_addTrailBtn">
            <Link to="/">로그아웃</Link>
          </Button>

          <TrailList></TrailList>
        </Layout>
      </Layout>
    );
  }
}

export default mypage_page;
