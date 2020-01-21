import React, { Component } from 'react';
import './style.css';
import { Layout } from 'antd';
const { Footer } = Layout;
const NGROK_URL = require('../../ngrokurl');

class Photozone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('######################', NGROK_URL+'/'+this.props.images.filePath)
    return (
      <Footer className="cl_trailinfo_footer" id="id_trailinfo_photozone">
        <img src={NGROK_URL+'/'+this.props.images.filePath} alt=''/>
      </Footer>
    );
  }
}

export default Photozone;
