/*
  요청: GET
  URL : /trails/:tag   선택한 카테고리의 산책로들 불러오기
  URL : /trails        모든 카테고리의 산책로들 불러오기
  응답 형태:
    res.status(200).json({
      trailId: 1,
      location1: (x, y),
      location2: (x, y),
      location3: (x, y),
      location4: (x, y),
      location5: (x, y),
      username: 'user1',
      title: 'good trail',
      (tag: 'night view',) - 추후논의 - 선택한 리스트 제목
      (rating: 5, 한 trail 의 정보창에 있는게 나을수도..)
    })
    res.status(404).json(forbidden)
*/

import React, { Component } from 'react';
import ThemeList from '../component/Main/ThemeList';
import TrailList from '../component/Main/TrailList';
import { Button, Layout } from 'antd';
import '../component/Main/mypage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
class mypage_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      isLogin: this.props.isLogin,
    };
  }
  componentDidMount(){
    
    axios
    .get('http://27bd42cc.ngrok.io/trails', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
    })
    .then(res => {
      // console.log("TOKEN", res)
      if (res.status === 200) {
        // isLogin state가 true이면 /main으로 가도록 리디렉션
        console.log(res);
      } else if (res.status === 401) {
        console.log('Error 401');
      }
    })
    .catch(err => {
      throw err;
    });
  }
  render() {
    const { location, isLogin } = this.state;
    console.log('메인 화면에서의 출력', location);
    return (
      <Layout className="cl_mypage">
        <ThemeList
          handleSelectThemeBtn={this.props.handleSelectThemeBtn}
        ></ThemeList>
        <Layout>
          {/* <Header id="id_mypage_header"></Header> */}
          <Button type="primary" className="cl_addTrailBtn" onClick={()=>this.props.handleSelectThemeBtn(null)}>
            모든 trail 보기
          </Button>
          <Button type="primary" className="cl_addTrailBtn">
            <Link to="/addtrail">Add Trail</Link>
          </Button>
          <Button type="primary" className="cl_addTrailBtn">
            <Link to="/">로그아웃</Link>
          </Button>

          <TrailList
            location={location}
            currentTheme={this.props.currentTheme}
            handleSelectTrail={this.props.handleSelectTrail}
          ></TrailList>
        </Layout>
      </Layout>
    );
  }
}

export default mypage_page;
