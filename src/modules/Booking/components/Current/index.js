import React, { Component } from 'react';

import { getRomanianDate } from '../../../../utils/index';

import MainTemplate from '../../../../components/Templates/Main/index';
import Loader from '../../../../components/Loader';
import CButton from '../../../../components/CButton';

const Row = ({ name, value }) => (
  <div className="row">
    <div className="col-xs-6">
      <strong>{name}:</strong>
    </div>
    <div className="col-xs-6">
      <span>{value}</span>
    </div>
  </div>
);

export default class CurrentBooking extends Component {
  constructor(props) {
    super(props);

    this.cancelBooking = this.cancelBooking.bind(this);
  }

  componentDidMount() {
    const bookingID = this.props.match.params.bookingID;

    if (bookingID) {
      return this.props.getByID(bookingID);
    }

    const bookingToken = this.props.match.params.bookingToken;
    this.props.get(bookingToken);
  }

  cancelBooking() {
    if (window.confirm('Esti sigur ca doresti anularea rezervarii?')) {
      const bookingToken = this.props.match.params.bookingToken;
      this.props.cancelBooking(bookingToken);
    }
  }

  renderDetails(props) {
    const booking = props.booking;
    const bookingAPI = props.bookingAPI;

    if (bookingAPI.error) {
      return <strong>Rezervare invalida.</strong>
    }

    if (!booking.id) {
      return null
    }

    return (
      <div>
        <Row name="Data" value={getRomanianDate(booking.date)} />
        <Row name="Oras" value={booking.city.name} />
        <Row name="Numar persoane" value={booking.person_count} />
        <Row name="Nume lider" value={`${booking.user.first_name} ${booking.user.last_name}`} />
        <Row name="Email lider" value={booking.user.email} />
        <Row name="Telefon lider" value={booking.user.phone} />

        <CButton
          className="cancel-btn"
          text="Anuleaza rezervarea"
          size="med"
          onClick={this.cancelBooking} />
      </div>
    )
  }

  render() {
    const props = this.props;
    const details = this.renderDetails(props);

    return (
      <MainTemplate className="container current-booking">
        <h2>Detalii rezervare</h2>

        <div className="details-container">
          { details }
        </div>

        <Loader loading={props.bookingAPI.pending} />
      </MainTemplate>
    );
  }
}
