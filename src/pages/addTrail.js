/*
  1. 이미지 포스팅 (POST)
      endpoint: /trails/:tag/:trailid/image
      body: body:{
              "img": 이미지파일
            }
      response: es.status(201).json({
                  "id": 5,
                  "fileName": "1579413412815.jpg",
                  "filePath": "uploads/1579413412815.jpg",
                  "updatedAt": "2020-01-19T05:56:52.841Z",
                  "createdAt": "2020-01-19T05:56:52.841Z"
                })
                res.sendStatus(401)
  
  2. 전체 포스팅 (POST)
      endpoint: trails
      body:{
            "newLocations": array(5),
            "tag": "night view",
            "imageId": 1,
            "title": "my trail",
            "review": "so good",
            "adminDistrict": "Seoul",
          }
      response: res.status(201).json({
                  "id": 3,
                  "userId": 1,
                  "locationId": 3,
                  "categoryId": 3,
                  "imageId": 3,
                  "title": "test",
                  "review": "test",
                  "adminDistrict": "yokohama",
                  "updatedAt": "2020-01-19T04:06:35.595Z",
                  "createdAt": "2020-01-19T04:06:35.595Z"
                })
                res.sendStatus(401)      
*/



import React, { Component } from 'react';
import { Row, Alert } from 'antd';
import Info_Map from '../component/AddTrail/Info_Map';
import Info_Trail from '../component/AddTrail/Info_Trail_Input';
import { Link } from 'react-router-dom';
import '../component/AddTrail/AddTrail.css';

class addTrail_page extends Component {
  constructor(props) {
    super(props);
    this.handleLastMarkerAdded = this.handleLastMarkerAdded.bind(this);
    this.state = {
      location:this.props.location,
      isLogin: this.props.isLogin,
      currentTheme:this.props.currentTheme,
      markerList:[]
    };
  }
  handleLastMarkerAdded = (markerList) => {
    console.log('5개 모두 추가 완료. 좌표: ', markerList);
    this.setState({
      markerList: markerList
    })
    
  }
  handleClose = () => {
    this.setState({ visible: false });
  };
  render() {
    const {location, isLogin, currentTheme, markerList} = this.state;
    console.log('Addtrail location: ', location);
    console.log('addtrails에서의  markerList: ', markerList);
    return (
      <Row id="id_addTrail_main_row">
        <Link to="/">
          <div className="cl_addTrail_logo">STROLL</div>
        </Link>
        <Info_Map
          location={location}
          isLogin={isLogin}
          currentTheme={currentTheme}
          handleLastMarkerAdded={this.handleLastMarkerAdded}
        ></Info_Map>
        <Info_Trail markerList={markerList} handleSelectThemeBtn={this.props.handleSelectThemeBtn}></Info_Trail>
      </Row>
    );
  }
}

export default addTrail_page;
