// 컴포넌트 파일명 대문자로 수정
// 컴포넌트 import 시 파일명과 같은 이름 사용하기
// => merge할 때 다 같이 수정

import React, { Component } from 'react';
import Login_page from './pages/login';
import Signup_page from './pages/signup';
import Mypage_page from './pages/mypage';
import Trailinfo_page from './pages/trailinfo';
import AddTrail_page from './pages/addTrail';

import { Route, Switch } from 'react-router-dom';

import './index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    /*login 페이지에 사용되는 state & method */
    /*signup 페이지에 사용되는 state & method */
    /*mypage 페이지에 사용되는 state & method */
    this.handleSelectThemeBtn = this.handleSelectThemeBtn.bind(this);
    /*trailinfo 페이지에 사용되는 state & method */
    /*addTrail 페이지에 사용되는 state & method */
    this.state = {
      /*모든 페이지에 사용되는 state */
      isLogin: false,
      location: this.props.location,

      /*login 페이지에 사용되는 state */

      /*signup 페이지에 사용되는 state */

      /*mypage 페이지에 사용되는 state */
      currentTheme: null,

      /*trailinfo 페이지에 사용되는 state */

      /*addTrail 페이지에 사용되는 state */
    };
  }

  /*login 페이지에 사용되는 method */

  /*signup 페이지에 사용되는 method */

  /*mypage 페이지에 사용되는 method */
  // mypage에 theme을 전달하는 함수
  handleSelectThemeBtn(theme) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa', theme);
    this.setState({
      currentTheme: theme,
    });
  }

  /*trailinfo 페이지에 사용되는 method */

  /*addTrail 페이지에 사용되는 method */

  render() {
    let { isLogin, location, currentTheme } = this.state;
    console.log('App.js에서의 출력', location);

    return (
      <div id="appjs">
        <Route
          exact
          path="/"
          component={() => <Login_page location={location} isLogin={isLogin} />}
        />
        <Switch>
          <Route
            path="/signup"
            component={() => (
              <Signup_page location={location} isLogin={isLogin} />
            )}
          />
          <Route path="/trailinfo" component={Trailinfo_page} />
          <Route
            path="/main"
            component={() => (
              <Mypage_page
                location={location}
                isLogin={isLogin}
                currentTheme={currentTheme}
                handleSelectThemeBtn={this.handleSelectThemeBtn}
              />
            )}
          />
          <Route path="/addtrail" component={AddTrail_page} />
        </Switch>
      </div>
    );
  }
}
