import React, { Component } from 'react';

export default class TrailListElement extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="cl_trail">{this.props.trail}</div>
      </div>
    );
  }
}
