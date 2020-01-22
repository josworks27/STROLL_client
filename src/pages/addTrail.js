/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Row } from 'antd';
import Info_Map from '../component/AddTrail/Info_Map';
import Info_Trail from '../component/AddTrail/Info_Trail_Input';
import { Link } from 'react-router-dom';
import '../component/AddTrail/AddTrail.css';

class addTrail_page extends Component {
  constructor(props) {
    super(props);
    this.handleLastMarkerAdded = this.handleLastMarkerAdded.bind(this);
    this.state = {
      location: this.props.location,
      isLogin: this.props.isLogin,
      currentTheme: this.props.currentTheme,
      markerList: [],
    };
  }
  handleLastMarkerAdded = markerList => {
    console.log('5개 모두 추가 완료. 좌표: ', markerList);
    this.setState({
      markerList: markerList,
    });
  };
  handleClose = () => {
    this.setState({ visible: false });
  };
  render() {
    const { location, isLogin, currentTheme, markerList } = this.state;
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
        <Info_Trail
          markerList={markerList}
          handleSelectThemeBtn={this.props.handleSelectThemeBtn}
        ></Info_Trail>
      </Row>
    );
  }
}

export default addTrail_page;
