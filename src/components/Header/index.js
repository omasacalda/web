import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        {this.props.headerTitle && <h1>{this.props.headerTitle}</h1>}
      </header>
    );
  }
}
