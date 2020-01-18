/*global daum*/
/*global kakao*/
import React, { Component } from 'react';
let dots = [];
let default_dots = [
  [37.503334, 127.051114],
  [37.503147, 127.051736],
  [37.503436, 127.050127],
  [37.502968, 127.050449],
];
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lat: this.props.location[0],
      Lng: this.props.location[1]
    };
  }
  componentDidMount() {
    var container = document.getElementById('id_everyTrails'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.daum.maps.LatLng(this.state.Lat, this.state.Lng), //지도의 중심좌표.
      level: 5, //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커 만들기
    var marker1, marker2, marker3, marker4, marker5;
    var trails = this.props.traillist;
    for (let i = 0; i < trails.length; i++) {
      // for(let j=0 ; j<5 ; j++){
        marker1 = new kakao.maps.CustomOverlay({
          content: '<span class="dot"></span>',
          zIndex: 1,
        });
        marker2 = new kakao.maps.CustomOverlay({
          content: '<span class="dot"></span>',
          zIndex: 1,
        });
        marker3 = new kakao.maps.CustomOverlay({
          content: '<span class="dot"></span>',
          zIndex: 1,
        });
        marker4 = new kakao.maps.CustomOverlay({
          content: '<span class="dot"></span>',
          zIndex: 1,
        });
        marker5 = new kakao.maps.CustomOverlay({
          content: '<span class="dot"></span>',
          zIndex: 1,
        });
        marker1.setPosition(new kakao.maps.LatLng(trails[i].location1[0], trails[i].location1[1]));
        marker2.setPosition(new kakao.maps.LatLng(trails[i].location2[0], trails[i].location2[1]));
        marker3.setPosition(new kakao.maps.LatLng(trails[i].location3[0], trails[i].location3[1]));
        marker4.setPosition(new kakao.maps.LatLng(trails[i].location4[0], trails[i].location4[1]));
        marker5.setPosition(new kakao.maps.LatLng(trails[i].location5[0], trails[i].location5[1]));
      // }
      

      marker1.setMap(map);
      marker2.setMap(map);
      marker3.setMap(map);
      marker4.setMap(map);
      marker5.setMap(map);
    }
    
    // // 마커 추가
    // kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    //   let clickPosition = mouseEvent.latLng;
    //   console.log(1111, clickPosition)
    //   var circleOverlay = new kakao.maps.CustomOverlay({
    //     content: '<span class="dot"></span>',
    //     position: clickPosition,
    //     zIndex: 1,
    //   });
    //   // 지도에 표시합니다
    //   circleOverlay.setMap(map);
    //   // 배열에 추가합니다
    //   dots.push({ circle: circleOverlay });
    // });

    // // 마커 전체 제거
    // kakao.maps.event.addListener(map, 'rightclick', function(mouseEvent) {
    //   var i;
    //   for (i = 0; i < dots.length; i++) {
    //     if (dots[i].circle) {
    //       dots[i].circle.setMap(null);
    //     }
    //   }
    //   dots = [];
    // });
  }
  render() {
    return (
      <div id="id_mapwrapper">
        <div id="id_everyTrails"></div>

        <div>
          {
          // dots.map(dot => {console.log(dot.circle.position)})
          }
        </div>
      </div>
    );
  }
}









// 지도 중심좌표 가져오기
// var position = map.getCenter();
// 지도 중심좌표 설정
// map.setCenter(new kakao.maps.LatLng(37.537183, 127.005454));


// //마커 만들기
// var marker = new kakao.maps.Marker({
//     map: map,
//     position: new kakao.maps.LatLng(33.450701, 126.570667)
// });

// 마커 위치 지정
// // 지도 혹은 로드뷰에서 마커의 위치를 지정
// marker.setPosition(new kakao.maps.LatLng(33.450701, 126.570667));

// 마커 좌표 반환
// marker.getPosition();
