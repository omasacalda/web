import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'react-notifications/lib/notifications.css';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { NotificationContainer } from 'react-notifications';
import history from '../../../../history';

import '../../../../assets/css/general.css';

import Homepage from '../../../Homepage/containers/HomepageContainer';
import Calendar from '../../../Calendar/containers/CalendarContainer';
import Admin from '../../../Admin/containers/AdminContainer';
import CurrentBooking from '../../../Booking/containers/CurrentContainer';
import AdminLogout from '../../../Admin/containers/LogoutContainer';

library.add(fas);

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.Admin.currentUser.id !== null,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default class App extends Component {
  render() {
    return(
      <Router history={history}>
        <main className="app-container">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/calendar/:city" component={Calendar} />
          <Route exact path="/booking/:bookingToken" component={CurrentBooking} />

          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/booking/:bookingID" component={userIsAuthenticated(CurrentBooking)} />
          <Route exact path="/logout" component={userIsAuthenticated(AdminLogout)} />

          <NotificationContainer />
        </main>
      </Router>
    );
  }
}
