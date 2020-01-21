import React, { Component } from 'react';

export default class ThemeListElement extends Component {
  render() {
    return (
      <div
        className="cl_tag"
        onClick={() => {
          this.props.handleSelectThemeBtn(this.props.theme);
        }}
      >
        {this.props.theme}
      </div>
    );
  }
}
