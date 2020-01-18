import React, { Component } from 'react';

export default class ThemeListElement extends Component {
  render() {
    return (
      <div onClick={()=>{this.props.handleSelectThemeBtn(this.props.theme)}}>
        <div className="cl_tag">{this.props.theme}</div>
      </div>
    );
  }
}
