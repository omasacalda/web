import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar/dist/entry.nostyle';

export default class Bookings extends Component {
  render() {
    return (
      <div className="calendar-bookings">
        <div className="header">
          <FontAwesomeIcon icon="chevron-left" size="2x" />
          <span>Ianuarie 2019</span>
          <FontAwesomeIcon icon="chevron-right" size="2x" />
        </div>
        <div className="content">
          <Calendar />
        </div>
      </div>
    );
  }
}
