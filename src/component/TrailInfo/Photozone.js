import React, { Component } from 'react';
import './style.css';
import { Layout } from 'antd';
const { Footer } = Layout;
// import { Row, Col } from 'antd';

class Photozone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Footer className="cl_trailinfo_footer" id="id_trailinfo_photozone">
        <img src={this.props.images} />
      </Footer>
    );
  }
}

export default Photozone;
