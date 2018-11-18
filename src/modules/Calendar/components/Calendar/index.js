import React, { Component } from 'react';

import MainTemplate from '../../../../components/Templates/Main/index';

import InfoCard from './InfoCard';
import Bookings from './Bookings';
import BookingModal from './BookingModal';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.props.getBookings();
  }

  showModal() {
    this.bookingModal.openModal();
  }

  render() {
    const props = this.props;

    return (
      <MainTemplate className="container calendar">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <InfoCard>
              <p>Program: Luni-Vineri</p>
              <p>Orele: 11:00 si 15:00</p>
            </InfoCard>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InfoCard>
              <p>Numar persoane:</p>
              <p>(minim 4, maxim 6)</p>
            </InfoCard>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InfoCard>
              <p>Locatie: 21 Decembrie,</p>
              <p>Nr 108, Cluj-Napoca</p>
            </InfoCard>
          </div>
        </div>
        <Bookings
          bookings={props.bookings}
          showModal={this.showModal}
          setSelectedDate={props.setSelectedDate} />

        <BookingModal modalRef={ref => this.bookingModal = ref} />
      </MainTemplate>
    );
  }
}
