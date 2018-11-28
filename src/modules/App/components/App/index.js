import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import history from '../../../../history';

import '../../../../assets/css/general.css';

import Homepage from '../../../Homepage/containers/HomepageContainer';
import Calendar from '../../../Calendar/containers/CalendarContainer';
import Admin from '../../../Admin/containers/AdminContainer';

library.add(fas);

export default class App extends Component {
  render() {
    return(
      <Router history={history}>
        <main className="app-container">
          <Route exact path="/" component={Homepage} />
          <Route path="/calendar/:city" component={Calendar} />
          <Route path="/admin" component={Admin} />

          <NotificationContainer />
        </main>
      </Router>
    );
  }
}
