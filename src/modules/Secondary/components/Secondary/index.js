import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainTemplte from '../../../../components/Templates/Main';

export default class Secondary extends Component {
  render() {
    return (
      <MainTemplte headerTitle="Demo Title">
        <h1>Secondary page</h1>
        <div>
          <Link to="/" className="pure-menu-link">Home</Link>
        </div>
      </MainTemplte>
    );
  }
}
