/*global daum*/
/*global kakao*/
import React, { Component } from 'react';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Lat: null,
      Lng: null,
    };
  }
  componentDidMount() {
    var container = document.getElementById('id_everyTrails'); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.daum.maps.LatLng(
        this.props.location[0],
        this.props.location[1],
      ), //지도의 중심좌표.
      level: 7, //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커 만들기
    var marker;
    var trails = this.props.traillist;
    console.log('trails in map', this.props.traillist); //전체보기 했을떄 빈 배열 뜸 

    var imageSrc =
        'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/mini_circle.png',
      imageSrc_first = 'https://ifh.cc/g/EcSAa.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(10, 10), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(0, 0) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      ),
      firstmarkerImage = new kakao.maps.MarkerImage(
        imageSrc_first,
        imageSize,
        imageOption,
      ),
      markerPosition; // 마커가 표시될 위치입니다
    for (let i = 0; i < trails.length; i++) {
      for (let j = 0; j < 5; j++) {
        var LatLng = JSON.parse(trails[i].location[j]);
        var finalImage = j === 0 ? firstmarkerImage : markerImage;
        markerPosition = new kakao.maps.LatLng(LatLng[1], LatLng[0]);
        marker = new kakao.maps.Marker({
          position: markerPosition,
          image: finalImage,
        });
        marker.setMap(map);
      }
    }
  }
  render() {
    console.log('Map.js 렌더링');
    return (
      <div id="id_mapwrapper">
        <div id="id_everyTrails"></div>
      </div>
    );
  }
}
