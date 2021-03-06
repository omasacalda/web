import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar/dist/entry.nostyle';
import history from '../../../../../history';

import { getFormattedDate, getNextYearDate, dateIsBefore } from '../../../../../utils';

export default class Bookings extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.checkDisabledDate = this.checkDisabledDate.bind(this);
    this.getTileClass = this.getTileClass.bind(this);
  }

  onChange(date) {
    const formattedDate = getFormattedDate(date);

    if (this.props.currentUser.type === 'admin') {
      const booking = this.props.bookings.find((booking) => {
        return booking.date === getFormattedDate(date)
      });

      if (booking) {
        return history.push(`/admin/booking/${booking.id}`);
      }
    }

    this.props.setSelectedDate(formattedDate);
    this.props.showModal();
  }

  checkDisabledDate(date) {
    if (date.getDay() === 0 || date.getDay() === 6 || (this.props.currentUser.type !== 'admin' && dateIsBefore(date))) {
      return true
    }

    return this.props.bookings.find((booking) => {
      return this.props.currentUser.type !== 'admin' && booking.date === getFormattedDate(date)
    });
  }

  getTileClass(date) {
    if (this.props.currentUser.type !== 'admin' && dateIsBefore(date)) {
      return 'date-tile tile-grey'
    }

    if (this.props.currentUser.type === 'admin') {
      const bookingOccupied = this.props.bookings.find((booking) => {
        return booking.date === getFormattedDate(date)
      });

      return bookingOccupied ? 'date-tile tile-red' : 'date-tile';
    }

    return 'date-tile'
  }

  render() {
    const maxDate = getNextYearDate();

    return (
      <div className="calendar-bookings">
        <Calendar
          locale="ro-RO"
          tileClassName={({date}) => this.getTileClass(date)}
          prev2Label={false}
          prevLabel={<FontAwesomeIcon icon="chevron-left" size="1x" />}
          nextLabel={<FontAwesomeIcon icon="chevron-right" size="1x" />}
          next2Label={false}
          maxDate={maxDate}
          tileDisabled={({date}) => this.checkDisabledDate(date)}
          onChange={this.onChange} />
      </div>
    );
  }
}
