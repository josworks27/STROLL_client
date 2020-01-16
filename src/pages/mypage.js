import React, { Component } from 'react';
import ThemeList from '../component/Mypage/ThemeList';
import TrailList from '../component/Mypage/TrailList';
import { Button, Layout } from 'antd';
import '../component/Mypage/mypage.css';
import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

class mypage_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cl_mypage">
        <Link to="/">
          <div className="cl_logo">STROLL</div>
        </Link>
        <ThemeList></ThemeList>

        <TrailList></TrailList>

        <Button type="primary" className="cl_addTrailBtn">
          <Link to="/addtrail">Add Trail</Link>
        </Button>
      </div>
    );
  }
}

export default mypage_page;
