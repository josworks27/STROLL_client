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
    /*trailinfo 페이지에 사용되는 state & method */
    /*addTrail 페이지에 사용되는 state & method */
    this.state = {
      /*모든 페이지에 사용되는 state */
      isLogin: false,
      location: this.props.location,
      // myLocation: window.navigator.geolocation.getCurrentPosition()
      /*login 페이지에 사용되는 state */
      /*signup 페이지에 사용되는 state */
      /*mypage 페이지에 사용되는 state */
      /*trailinfo 페이지에 사용되는 state */
      /*addTrail 페이지에 사용되는 state */
    };
    this.handleIsloginState = this.handleIsloginState.bind(this);
  }
  /*login 페이지에 사용되는 method */
  handleIsloginState() {
    this.setState({ isLogin: true });
  }
  /*signup 페이지에 사용되는 method */
  /*mypage 페이지에 사용되는 method */
  /*trailinfo 페이지에 사용되는 method */
  /*addTrail 페이지에 사용되는 method */

  render() {
    console.log(this.state.location);
    let state = this.state;
    return (
      <div id="appjs">
        <Route
          exact
          path="/"
          component={() => (
            <Login_page
              handleIsloginState={this.handleIsloginState}
              isLogin={state.isLogin}
            />
          )}
        />
        <Switch>
          <Route path="/signup" component={Signup_page} />
          <Route path="/trailinfo" component={Trailinfo_page} />
          <Route
            path="/main"
            component={() => <Mypage_page location={state.location} />}
          />
          <Route path="/addtrail" component={AddTrail_page} />
        </Switch>
      </div>
    );
  }
}
