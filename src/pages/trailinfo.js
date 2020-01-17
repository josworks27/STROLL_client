import React, { Component } from 'react';
import Info_Map from '../component/TrailInfo/Info_Map';
import Info_Trail from '../component/TrailInfo/Info_Trail';
import { Row } from 'antd';
import './trailinfo.css';

class trailinfo_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row id="id_trailinfo_main_row">
        <Info_Map></Info_Map>
        <Info_Trail></Info_Trail>
      </Row>
    );
  }
}

export default trailinfo_page;
