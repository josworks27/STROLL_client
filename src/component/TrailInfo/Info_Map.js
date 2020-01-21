/*global daum*/
/*global kakao*/

// 이 페이지에는 점들이 선으로 연결되어있어야 함
import React, { Component } from 'react';
import './style.css';
import Photozone from './Photozone';
import { Col, Layout } from 'antd';
const { Header, Content } = Layout;

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
    console.log('&&&&&&&&&&&&&&&', this.props.currentT[0])
    var location = this.props.currentT[0].trail.location.map(el => JSON.parse(el));
    
    var container = document.getElementById('id_trailinfo_map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.daum.maps.LatLng(location[0][1], location[0][0]), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커 만들기
    var marker;
    for (let i = 0; i < location.length; i++) {
      marker = new kakao.maps.CustomOverlay({
        content: `<span class="dot${i} dot"></span>`,
        zIndex: 1,
      });
      marker.setPosition(new kakao.maps.LatLng(location[i][1], location[i][0]));
      marker.setMap(map);
    }
    // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
    var linePath = [
      new kakao.maps.LatLng(location[0][1], location[0][0]),
      new kakao.maps.LatLng(location[1][1], location[1][0]),
      new kakao.maps.LatLng(location[2][1], location[2][0]),
      new kakao.maps.LatLng(location[3][1], location[3][0]),
      new kakao.maps.LatLng(location[4][1], location[4][0]),
    ];

    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: '#8ABC30', // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid', // 선의 스타일입니다
    });

    // 지도에 선을 표시합니다
    polyline.setMap(map);
  }
  render() {
    let state = this.state;

    return (
      <Col span={12} id="id_trailinfo_info_map">
        <Layout>
          <Header className="cl_trailinfo_header">
            {this.props.currentT[0].trail.title}
            {/* <button> 홈으로 </button>
            <button> 이 주변의 모든 산책로는? </button> */}
          </Header>
          <Content
            className="cl_trailinfo_content"
            id="id_trailinfo_map"
          ></Content>
          {this.props.fakedata[0].image.map((el, n) => {
            return (
              <Photozone
                className="cl_contents_in_TrailInfoPage_InfoMap"
                key={n}
                images={el}
              ></Photozone>
            );
          })}
        </Layout>
      </Col>
    );
  }
}
export default Info_Map;
