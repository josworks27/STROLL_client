import React, { Component } from 'react';

export default class ThemeListElement extends Component {
  render() {
    console.log(this.props.tag);
    return (
      <div>
        <div className="cl_tag">{this.props.tag}</div>
      </div>
    );
  }
}
