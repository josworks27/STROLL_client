import React, { Component } from 'react';
import Info_Map from '../component/TrailInfo/Info_Map';
import Info_Trail from '../component/TrailInfo/Info_Trail';
import fakedata from '../component/TrailInfo/fakedata';
import axios from 'axios';
import { Row } from 'antd';
import '../component/TrailInfo/style.css';

class trailinfo_page extends Component {
  constructor(props) {
    super(props);
    this.state = { currentT: [] };
  }
  componentDidMount() {
    // axios
    //   .get(
    //     `http://2c815448.ngrok.io/:${this.props.currentTrail.category.tag}/:${this.props.currentTrail.id}`,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${localStorage.token}`,
    //       },
    //     },
    //   )
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.setState({
    //         currentT: this.state.currentT.concat(),
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log('Invaild token');
    //     throw err;
    //   });
  }
  render() {
    console.log(this.props.currentTrail);
    return (
      <Row id="id_trailinfo_main_row">
        <Info_Map fakedata={fakedata}></Info_Map>
        <Info_Trail fakedata={fakedata}></Info_Trail>
      </Row>
    );
  }
}

export default trailinfo_page;
