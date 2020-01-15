import React, { Component } from 'react';
import login_page from './pages/login';
import signup_page from './pages/signup';
// import {addTrail_page, login_page, mypage_page, signup_page, trailinfo_page} from './pages'
// import LoginInfo from './component/Main/LoginInfo';
// import SignUpInfo from './component/Signup/SignUpInfo';
import { Route, Switch, Link } from 'react-router-dom';
// import { LoginInfo } from './index';
// import Routes from './Route/Routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={login_page} />
        <Switch>
          <Route path='/signup' component={signup_page} />
          {/* <Route path='/signup' component={SignUpInfo} />
          <Route path='/signup' component={SignUpInfo} />
          <Route path='/signup' component={SignUpInfo} /> */}
        </Switch>
      </div>
    );
  }
}
