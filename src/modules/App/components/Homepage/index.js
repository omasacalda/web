import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainTemplte from '../../../../components/Templates/Main';

export default class Homepage extends Component {
  render() {
    return (
      <MainTemplte>
        <h1>Homepage</h1>
        <div>
          {/*<Link to="/secondary-page" className="pure-menu-link">Go to Secondary page</Link>*/}
          <h3>Homepage :)</h3>
        </div>
      </MainTemplte>
    );
  }
}
