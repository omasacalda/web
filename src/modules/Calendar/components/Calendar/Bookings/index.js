import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar/dist/entry.nostyle';

import { getFormattedDate, getNextYearDate } from '../../../../../utils';

export default class Bookings extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.checkDisabledDate = this.checkDisabledDate.bind(this);
  }

  onChange(date) {
    this.props.setSelectedDate(getFormattedDate(date));
    this.props.showModal();
  }

  checkDisabledDate(date) {
    if (date.getDay() === 0 || date.getDay() === 6) {
      return true
    }

    return this.props.bookings.find((booking) => {
      return booking.date === getFormattedDate(date)
    });
  }

  render() {
    const maxDate = getNextYearDate();

    return (
      <div className="calendar-bookings">
        <Calendar
          locale="ro-RO"
          tileClassName="date-tile"
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
