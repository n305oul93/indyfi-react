import React, { Component } from 'react';
import MainNavbar from './NavbarComponent';
import Home from './HomeComponent';
import Watch from './WatchComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <>
        <MainNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/watch' component={Watch} />
          <Route exact path='/about' component={About} />
          <Redirect to='/' />
        </Switch>
      </>
    );
  }
}

export default Main;
