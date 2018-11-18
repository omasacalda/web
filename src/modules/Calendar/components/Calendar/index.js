import React, { Component } from 'react';

import MainTemplate from '../../../../components/Templates/Main/index';

import InfoCard from './InfoCard';
import Bookings from './Bookings';
import BookingModal from './BookingModal';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.onModalHide = this.onModalHide.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
    this.addBooking = this.addBooking.bind(this);
  }

  componentDidMount() {
    this.props.getBookings();
    this.props.connectSocket();
  }

  showModal() {
    this.props.setBookingDateSocket();
    this.bookingModal.openModal();
  }

  onModalHide() {
    this.props.removeBookingDateSocket();
  }

  handleFieldChange(name, event) {
    this.props.setField(name, event.target.value);
  }

  setSelectedDate(date) {
    this.props.setSelectedDate(date);
    this.props.setField('date', date);
  }

  addBooking(e) {
    e.preventDefault();

    this.props.addBooking(this.props.fields);
    this.props.clearFields();
    this.bookingModal.closeModal();
  }

  render() {
    const props = this.props;
    const bookings = [...props.bookings, ...props.pendingBookings];

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
          bookings={bookings}
          showModal={this.showModal}
          setSelectedDate={this.setSelectedDate} />

        <BookingModal
          modalRef={ref => this.bookingModal = ref}
          onHide={this.onModalHide}
          handleFieldChange={this.handleFieldChange}
          addBooking={this.addBooking}
          fields={this.props.fields} />
      </MainTemplate>
    );
  }
}
