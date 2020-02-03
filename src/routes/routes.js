import React, { Component } from 'react';
import {Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import routeCodes from '../constants/routes';
import {Header} from './header'
import {LandingPage} from './LandingPage'
class Routes extends Component {
    constructor() {
      super();
      this.state = {
       
      };
    }
   
    render() {
      const history = createBrowserHistory();
      return (
  
        <Router history={history}>
            <Header/>
          <Switch location={history.location}>
          </Switch>
        </Router>
      )
    }
  }
  
  export default Routes;
  