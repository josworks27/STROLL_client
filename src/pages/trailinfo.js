/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Info_Map from '../component/TrailInfo/Info_Map';
import Info_Trail from '../component/TrailInfo/Info_Trail';
import fakedata from '../component/TrailInfo/fakedata';
import axios from 'axios';
import { Row } from 'antd';
import '../component/TrailInfo/style.css';



//     /trails/:tag/:trailId

class trailinfo_page extends Component {
  constructor(props) {
    super(props);

    this.state = { currentT: [] };
  }
  componentDidMount() {
    
    var trailInfo = localStorage.currentTrail;
    if (!trailInfo) {
      axios
        .get(
          `http://ba4625d3.ngrok.io/trails/${this.props.currentTrail.category.tag}/${this.props.currentTrail.id}`,

          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.token}`,
            },
          },
        )
        .then(res => {
          if (res.status === 200) {
            console.log(1099999999999999, res.data);
            this.setState({
              currentT: this.state.currentT.concat(res.data),
            });
          }
        })
        .catch(err => {
          console.log('Invaild token');
          throw err;
        });
      localStorage.currentTrail = JSON.stringify(this.props.currentTrail);
    } else {
      var parseTrailInfo;
      if (!this.props.currentTrail) {
        parseTrailInfo = JSON.parse(trailInfo);
      } else {
        localStorage.currentTrail = JSON.stringify(this.props.currentTrail);
        parseTrailInfo = this.props.currentTrail;
      }

      axios
        .get(
          `http://ba4625d3.ngrok.io/trails/${parseTrailInfo.category.tag}/${parseTrailInfo.id}`,

          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.token}`,
            },
          },
        )
        .then(res => {
          if (res.status === 200) {
            console.log('AAAAAAAAAAAAAAAAAAAAA', res);
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
    let location = currentT.trail;

    if (!currentT.length) {
      return <div>wait for a sec..</div>;
    } else {
      return (
        <Row id="id_trailinfo_main_row">
          <Info_Map fakedata={fakedata} location={location} currentT={currentT}></Info_Map>
          <Info_Trail
            fakedata={fakedata}
            currentT={currentT}
          ></Info_Trail>
        </Row>
      );
    }
  }
}

export default trailinfo_page;
