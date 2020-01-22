import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
const NGROK_URL = require('../../ngrokurl');

class Photozone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Footer className="cl_trailinfo_footer" id="id_trailinfo_photozone">
        <img src={NGROK_URL + '/' + this.props.images.fileName} alt="" />
      </Footer>
    );
  }
}

export default Photozone;
