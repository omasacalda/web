import React, { Component } from "react";

import MainTemplate from "../../../../components/Templates/Main";

export default class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <MainTemplate className="homepage admin" />
    );
  }
}
