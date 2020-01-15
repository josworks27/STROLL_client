import React, { Component } from 'react';
import LoginInfo from './component/Main/LoginInfo';
import { Route, Switch, Link } from 'react-router-dom';
// import { LoginInfo } from './index';
// import Routes from './Route/Routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={LoginInfo} />
        </Switch>
      </div>
    );
  }
}
