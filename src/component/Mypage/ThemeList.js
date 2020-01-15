import React, { Component } from 'react';
import ThemeListElement from './ThemeListElement';
import { Menu } from 'antd';

let tag = ['With pet', 'Night view', 'Calm', 'Lake'];
export default class ThemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          className="cl_ThemeList"
        >
          <div className="cl_ThemeList_category">#Tag</div>
          {tag.map(el => {
            return (
              <ThemeListElement
                className="cl_tag"
                key={'theme' + el}
                tag={el}
              />
            );
          })}
        </Menu>
      </div>
    );
  }
}
