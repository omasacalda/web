import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import '../../../../assets/css/general.css';

import Homepage from '../../containers/HomepageContainer';

export default class App extends Component {
  render() {
    return(
      <Router>
        <main className="app-container">
          <Route exact path="/" component={Homepage} />
          <Route path="/test" component={Homepage} />
        </main>
      </Router>
    );
  }
}
