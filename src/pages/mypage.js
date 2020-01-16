import React, { Component } from 'react';
import ThemeList from '../component/Mypage/ThemeList';
import TrailList from '../component/Mypage/TrailList';
import { Button } from 'antd';
import '../component/Mypage/mypage.css';

class mypage_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cl_mypage">
        <ThemeList> </ThemeList>
        <div className="cl_line"></div>
        <TrailList> </TrailList>
        <Button type="primary" className="cl_addTrailBtn">
          Add Trail
        </Button>
      </div>
    );
  }
}

export default mypage_page;
