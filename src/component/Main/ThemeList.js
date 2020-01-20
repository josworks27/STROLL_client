import React, { Component } from 'react';
import ThemeListElement from './ThemeListElement';
import { Menu } from 'antd';
import { Layout } from 'antd';

const { Sider } = Layout;


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
  makeTag() {
    let arr = [];
    var uniqTag;
    for (let i = 0; i < this.props.wholetrails.length; i++) {
      const el = this.props.wholetrails[i];
      arr.push(el.category.tag);
      uniqTag = Array.from(new Set(arr));
    }
    return uniqTag;
  }

  render() {
    var tags = this.makeTag();
    if (!tags) {
      tags = ['wait for a sec..'];
    }
    console.log(tags);
    return (
      <Sider id="id_mypage_sider">
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          className="cl_ThemeList"
        >
          <div className="cl_ThemeList_category">#Tag</div>
          {tags.map(el => {
            return (
              <ThemeListElement
                className="cl_tag"
                key={'theme' + el}
                theme={el}
                handleSelectThemeBtn={this.props.handleSelectThemeBtn}
              />
            );
          })}
        </Menu>
      </Sider>
    );
  }
}
