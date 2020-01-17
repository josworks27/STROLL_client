import React, { Component } from 'react';
import { Row, Alert } from 'antd';
import Info_Map from '../component/AddTrail/Info_Map';
import Info_Trail from '../component/AddTrail/Info_Trail_Input';
import { Link } from 'react-router-dom';
import '../component/AddTrail/AddTrail.css';

class addTrail_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClose = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <Row id="id_addTrail_main_row">
        <Link to="/">
          <div className="cl_addTrail_logo">STROLL</div>
        </Link>
        <Info_Map></Info_Map>
        <Info_Trail></Info_Trail>
      </Row>
    );
  }
}

export default addTrail_page;
