import React, { Component } from 'react';
import login_page from './pages/login';
import signup_page from './pages/signup';
import mypage_page from './pages/mypage';
import trailinfo_page from './pages/trailinfo';
import addTrail_page from './pages/addTrail';

import { Route, Switch } from 'react-router-dom';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <div id="appjs">
        <Route exact path="/" component={login_page} />
        <Switch>
          <Route path="/signup" component={signup_page} />
          <Route path="/trailinfo" component={trailinfo_page} />
          <Route path="/main" component={mypage_page} />
          <Route path="/addtrail" component={addTrail_page} />
        </Switch>
      </div>
    );
  }
}
