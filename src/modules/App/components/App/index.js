import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


import '../../../../assets/css/general.css';

import Homepage from '../../../Homepage/containers/HomepageContainer';
import Calendar from '../../../Calendar/containers/CalendarContainer';

library.add(fas);

export default class App extends Component {
  render() {
    return(
      <Router>
        <main className="app-container">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/test" component={Homepage} />
          <Route exact path="/calendar/:city" component={Calendar} />
        </main>
      </Router>
    );
  }
}
