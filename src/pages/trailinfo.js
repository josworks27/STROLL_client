/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Info_Map from '../component/TrailInfo/Info_Map';
import Info_Trail from '../component/TrailInfo/Info_Trail';
import axios from 'axios';
import { Row, Icon } from 'antd';
import '../component/TrailInfo/TrailInfo.css';
const NGROK_URL = require('../ngrokurl');

//     /trails/:tag/:trailId

class trailinfo_page extends Component {
  constructor(props) {
    super(props);

    this.state = { currentT: [] }; // 메인에서 선택한 산책로 하나의 정보
  }
  componentDidMount() {
    var trailInfo = localStorage.currentTrail;
    // 로컬스토리지에 저장된 산책로 정보가 없을 때 => 처음 이 페이지로 넘어왔을 때

    if (!trailInfo) {
      axios
        .get(
          `${NGROK_URL}/trails/${this.props.currentTrail.category.tag}/${this.props.currentTrail.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.token}`,
            },
          },
        )
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('currentTrail', JSON.stringify(res.data));
            this.setState({
              currentT: this.state.currentT.concat(res.data),
            });
          }
        })
        .catch(err => {
          console.log('Invaild token');
          throw err;
        });
    } else {
      var parseTrailInfo;
      if (!this.props.currentTrail) {
        parseTrailInfo = JSON.parse(trailInfo).trail;
      } else {
        parseTrailInfo = this.props.currentTrail;
      }

      axios
        .get(
          `${NGROK_URL}/trails/${parseTrailInfo.category.tag}/${parseTrailInfo.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.token}`,
            },
          },
        )
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('currentTrail', JSON.stringify(res.data));
            this.setState({
              currentT: this.state.currentT.concat(res.data),
            });
          }
        })
        .catch(err => {
          console.log('Invaild token');
          throw err;
        });
    }
  }

  render() {
    let { currentT } = this.state;
    let location = currentT.trail; // 점 5개 좌표

    if (!currentT.length) {
      return (
        <div className="cl_trailInfo_loading">
          {' '}
          STR
          <img
            className="cl_trailInfo_img_loading"
            src="https://ifh.cc/g/Y9sym.png"
          ></img>
          <Icon type="loading" className="cl_trailInfo_icon_loading" />
          LL
        </div>
      );
    } else {
      return (
        <Row id="id_trailinfo_main_row">
          <Info_Map location={location} currentT={currentT}></Info_Map>
          <Info_Trail currentT={currentT}></Info_Trail>
        </Row>
      );
    }
  }
}

export default trailinfo_page;
