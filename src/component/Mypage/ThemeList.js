import React, { Component } from 'react';
import ThemeListElement from './ThemeListElement';
import { Menu } from 'antd';
import { Button, Layout } from 'antd';

const { Sider, Content } = Layout;
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
      <Sider id="id_mypage_sider">
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
      </Sider>
    );
  }
}
