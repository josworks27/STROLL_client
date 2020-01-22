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
    let imagehtml = !this.props.images.fileName ? (
      ''
    ) : (
      <img
        id="id_Photozone_image"
        src={NGROK_URL + '/' + this.props.images.fileName}
        alt=""
      />
    );
    return (
      <Footer className="cl_trailinfo_footer" id="id_trailinfo_photozone">
        {imagehtml}
      </Footer>
    );
  }
}
export default Photozone;
