import React, { Component } from 'react';
import SignUpInfo from './ThemeListElement';
let tag = ['With pet', 'Night view', 'Calm'];
export default class ThemeList extends Component {
  render() {
    return (
      <div>
        {tag.map(el => {
          return <SignUpInfo key={'tag:' + el} tag={el} />;
        })}
      </div>
    );
  }
}
