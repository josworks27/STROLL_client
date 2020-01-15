import React, { Component } from 'react';
import LoginInfo from './component/Main/LoginInfo';
import SignUpInfo from './component/Signup/SignUpInfo';
import { Route, Switch, Link } from 'react-router-dom';
// import { LoginInfo } from './index';
// import Routes from './Route/Routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={LoginInfo} />
        <Switch>
          <Route path='/signup' component={SignUpInfo} />
        </Switch>
      </div>
    );
  }
}
