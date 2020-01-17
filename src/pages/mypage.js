import React, { Component } from 'react';
import ThemeList from '../component/Main/ThemeList';
import TrailList from '../component/Main/TrailList';
import { Button, Layout } from 'antd';
import '../component/Main/mypage.css';
import { Link } from 'react-router-dom';

class mypage_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location
    };
  }
  render() {
    let state = this.state;
    console.log(state.location)
    return (
      <Layout className="cl_mypage">
        <ThemeList></ThemeList>
        <Layout>
          {/* <Header id="id_mypage_header"></Header> */}
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
