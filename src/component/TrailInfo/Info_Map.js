/*global daum*/
/*global kakao*/

// 이 페이지에는 점들이 선으로 연결되어있어야 함
import React, { Component } from 'react';
import './style.css';
import Photozone from './Photozone';
import { Col, Layout } from 'antd';
const { Header, Content } = Layout;
let dots = [];
let default_dots = [
  [37.503334, 127.051114],
  [37.503147, 127.051736],
  [37.503436, 127.050127],
  [37.502968, 127.050449],
];

class Info_Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      Lat: 37.502908,
      Lng: 127.05002,
    };
  }
  componentDidMount() {
    var container = document.getElementById('id_trailinfo_map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.daum.maps.LatLng(this.state.Lat, this.state.Lng), //지도의 중심좌표.
      level: 5, //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커 만들기
    var marker;
    for (let i = 0; i < default_dots.length; i++) {
      marker = new kakao.maps.CustomOverlay({
        content: '<span class="dot"></span>',
        zIndex: 1,
      });
      marker.setPosition(
        new kakao.maps.LatLng(default_dots[i][0], default_dots[i][1]),
      );
      marker.setMap(map);
    }
  }
  render() {
    let state = this.state;

    return (
      <Col span={12} id="id_trailinfo_info_map">
        <Layout>
          <Header className="cl_trailinfo_header">
            Header
            {/* <button> 홈으로 </button>
            <button> 이 주변의 모든 산책로는? </button> */}
          </Header>
          <Content
            className="cl_trailinfo_content"
            id="id_trailinfo_map"
          ></Content>
          <Photozone className="cl_contents_in_TrailInfoPage_InfoMap"></Photozone>
        </Layout>
      </Col>
    );
  }
}
export default Info_Map;
