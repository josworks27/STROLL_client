import React, { Component } from 'react';
import Info_Map from '../component/TrailInfo/Info_Map';
import Info_Trail from '../component/TrailInfo/Info_Trail';
import { Row, Col } from 'antd';
import './trailinfo.css';
import { Route } from 'react-router-dom';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import 'antd/dist/antd.css';
// import './LoginInfo.css';
// import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class trailinfo_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Info_Map></Info_Map>
        <Info_Trail></Info_Trail>
      </Row>
    );
  }
}

export default trailinfo_page;
