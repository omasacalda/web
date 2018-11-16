import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../../../../assets/css/general.css';

import Secondary from '../../../Secondary/components/Secondary';
import Homepage from '../../containers/HomepageContainer';

export default class App extends Component {
  render() {
    return(
      <main className="app-container">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/secondary-page" component={Secondary} />
      </main>
    );
  }
}
