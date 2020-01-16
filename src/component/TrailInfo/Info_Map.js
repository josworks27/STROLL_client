import React, { Component } from 'react';
import './style.css';
import Photozone from './Photozone';
import { Col, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// const axios = require('axios');
/*
// 네이버 지도 api에 접근하기 위한 id, secret 값
const NAVER_MAP_CLIENT_ID = 'yyaphdaaa5';
const NAVER_MAP_CLIENT_SECRET = 'KKadn3cJ4IelUyP99oXS51BEl71rVoUYWWjJaYB4';
const URL =
  'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=yyaphdaaa5';
const Naver_headers = {
  'X-NCP-APIGW-API-KEY-ID': NAVER_MAP_CLIENT_ID,
  'X-NCP-APIGW-API-KEY': NAVER_MAP_CLIENT_SECRET,
};
const config = {
  method: 'get',
  url: URL,
  headers: Naver_headers,
};
*/
// let checkMap = false;

class Info_Map extends Component {
  constructor(props) {
    super(props);
    // this.getMap = this.getMap.bind(this);
    this.state = {
      map: null,
    };
  }

  // async getMap() {
  //   var naver ;
  //   axios
  //     .get(URL, { headers: headers })
  //     .then(response => {
  //       // If request is good...
  //       console.log(response.data);
  //       // naver = response
  //     })
  //     .catch(error => {
  //       console.log('error ' + error);
  //     });

  //   // var naver = await axios.get(
  //   //   'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=yyaphdaaa5',
  //   //   {
  //   //     headers: headers,
  //   //   },
  //   // );
  //   // var mapOptions = {
  //   //   center: new naver.maps.LatLng(37.3595704, 127.105399),
  //   //   zoom: 10,
  //   // };
  //   // var map = new naver.maps.Map('id_map', mapOptions);
  //   this.setState({
  //     map: 'hello',
  //   });
  // }

  render() {
    let state = this.state;
    // if (!checkMap) {
    //   console.log('지도 로딩중');
    //   let response = makeRequest();
    //   console.log(11111, response);
    //   // axios
    //   //   .get(URL, Naver_headers)
    //   //   .then(response => {
    //   //     // If request is good...
    //   //     console.log(11111, response.data);
    //   //     checkMap = true;
    //   //     // naver = response
    //   //   })
    //   //   .catch(error => {
    //   //     console.log('error ', error);
    //   //   });
    // }
    return (
      <Col span={12} id="id_trailinfo_info_map">
        <Layout>
          <Header className='cl_trailinfo_header'>
            Header
            {/* <button> 홈으로 </button>
            <button> 이 주변의 모든 산책로는? </button> */}
          </Header>
          <Content className='cl_trailinfo_content' id='id_trailinfo_map'>
            지도가 올 자리 입니다.
            {/* <img src="navermap.png" id="id_img_trailinfo" alt=""></img> */}
            <div id="id_test"></div>
          </Content>
          <Photozone className="cl_contents_in_TrailInfoPage_InfoMap"></Photozone>
        </Layout>
      </Col>
    );
  }
}
// async function makeRequest() {
//   const config = {
//     method: 'get',
//     url: URL,
//     headers: Naver_headers,
//   };

//   let res = await axios(config);
//   return res;
//   // console.log(res.request._header);
// }
export default Info_Map;
