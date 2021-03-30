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

  componentWillUnmount() {
    this.props.removeBookingDateSocket();
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
    this.props.removeBookingDateSocket();

    this.props.addBooking(this.props.fields);
    this.props.clearFields();
    this.bookingModal.closeModal();
  }

  render() {
    const props = this.props;
    const bookings = [...props.bookings, ...props.pendingBookings];

    return (
      <MainTemplate className='container calendar'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4'>
            <InfoCard>
              <p>Program: Luni-Vineri</p>
              <p>Orele: 11:00 si 15:00</p>
            </InfoCard>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <InfoCard>
              <p>Numar persoane:</p>
              <p>(minim 4, maxim 6)</p>
            </InfoCard>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <InfoCard>
              <p>Locatie: 21 Decembrie,</p>
              <p>Nr 108, Cluj-Napoca</p>
            </InfoCard>
          </div>
        </div>

        <Bookings
          bookings={bookings}
          showModal={this.showModal}
          setSelectedDate={this.setSelectedDate}
          currentUser={props.currentUser}
        />

        <div className='info-section-wrapper row'>
          <div className='col-xs-12'>
            <InfoCard>
              <strong>De știut:</strong>
              <br />
              <br />
              <ul>
                <li>
                  <strong>Locația:</strong> Bdul 21 Decembrie 1989 nr. 108, în
                  curtea interioară, pe dreapta. Avem un loc de parcare!
                </li>
                <li>
                  <strong>Program:</strong> De luni până vineri, de la 11.00 la
                  15.00
                </li>
                <li>
                  <strong>Echipa:</strong> Echipa poate fi formată din 2-4
                  persoane!{' '}
                  <i>
                    <strong>Voluntarii trebuie să fie clinic sănătoși! </strong>
                    (mai multe persoane nu incap; mai putine inseamna risc ca
                    mancarea sa nu fie gata la timp)
                  </i>
                </li>
                <li>
                  <strong>Activități:</strong>
                  <ul>
                    <li>pregătirea alimentelor</li>
                    <li>prepararea hranei</li>
                    <li>spălarea vaselor și echipamentelor folosite</li>
                    <li>igienizarea celor 3 incăperi în care se lucrează</li>
                    <li>
                      transportul și distribuirea caserolelor în Piața Cipariu,
                      unde, la ora 15.00, împărțim mâncarea beneficiarilor
                      (transportul propriu zis este asigurat de noi)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Cantități:</strong> 200 – 230 mese calde/zi
                </li>
                <li>
                  <strong>Ingredientele:</strong>
                  <ul>
                    <li>
                      Costul unei mese calde este între 2 și 4 lei, în funcție
                      de reteță. Și noi asigurăm ingredientele.
                    </li>
                    <li>
                      Pentru donații, emitem chitanță persoanelor
                      fizice/încheiem contract de sponsorizare cu persoanele
                      juridice
                    </li>
                  </ul>
                </li>
              </ul>
            </InfoCard>
          </div>
        </div>

        <BookingModal
          modalRef={ref => (this.bookingModal = ref)}
          onHide={this.onModalHide}
          handleFieldChange={this.handleFieldChange}
          addBooking={this.addBooking}
          fields={this.props.fields}
        />
      </MainTemplate>
    );
  }
}
