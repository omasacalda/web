import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../../../../assets/css/general.css';

// import Homepage from '../../containers/HomepageContainer';
import Homepage from '../../components/Homepage';

export default class App extends Component {
  render() {
    return(
      <main className="app-container">
        {/*<Route exact path="/" component={Homepage} />*/}
        <h3>Hello :)</h3>
      </main>
    );
  }
}
