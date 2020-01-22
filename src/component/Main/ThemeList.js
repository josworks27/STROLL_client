import React, { Component } from 'react';
import ThemeListElement from './ThemeListElement';
import { Menu, Icon, Layout } from 'antd';

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
      return (
        <Sider id="id_mypage_sider">
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            className="cl_ThemeList"
          >
            <div className="cl_ThemeList_category">
              #Tag
              <div className="cl_Main_loading">
                {' '}
                <img
                  className="cl_Main_img_loading"
                  src="https://ifh.cc/g/NTev7.png"
                ></img>
                <Icon type="loading" className="cl_Main_icon_loading" />
              </div>
            </div>
          </Menu>
        </Sider>
      );
    }
    return (
      <Sider id="id_mypage_sider">
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          className="cl_ThemeList"
        >
          <div className="cl_ThemeList_category">
            #Tag
            {tags.map(el => {
              return (
                <ThemeListElement
                  key={'theme' + el}
                  theme={el}
                  handleSelectThemeBtn={this.props.handleSelectThemeBtn}
                />
              );
            })}
          </div>
        </Menu>
      </Sider>
    );
  }
}
