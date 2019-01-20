import React, { Component } from "react";

import MainTemplate from "../../../../components/Templates/Main/index";
import CButton from "../../../../components/CButton/index";

export default class CurrentBooking extends Component {
  componentDidMount() {
    const bookingToken = this.props.match.params.bookingToken;
  }

  render() {
    const props = this.props;

    console.log('props', props);

    return (
      <MainTemplate className="container">
        <h1>Current booking</h1>
      </MainTemplate>
    );
  }
}
