import React  from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import BaseModal from '../../../../../components/BaseModal';
import CButton from '../../../../../components/CButton';

const BookingModal = (props) => (
  <BaseModal
    className="booking-modal"
    ref={props.modalRef}
    {...props}>
    <p className="title">O Masă Caldă</p>
    <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    <form onSubmit={props.addBooking}>
      <div className="form-fields">
        <FormGroup controlId="firstName">
          <FormControl
            required
            type="text"
            placeholder="Nume lider echipa"
            value={props.fields.first_name}
            onChange={(e) => props.handleFieldChange('first_name', e)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="lastName">
          <FormControl
            required
            type="text"
            placeholder="Prenume lider echipa"
            value={props.fields.last_name}
            onChange={(e) => props.handleFieldChange('last_name', e)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="phone">
          <FormControl
            required
            type="phone"
            placeholder="Numar telefon lider echipa"
            value={props.fields.phone}
            onChange={(e) => props.handleFieldChange('phone', e)} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="email">
          <FormControl
            required
            type="email"
            placeholder="Email lider echipa"
            value={props.fields.email}
            onChange={(e) => props.handleFieldChange('email', e)} />
          <FormControl.Feedback />
        </FormGroup>
        <div className="row">
          <FormGroup controlId="people" bsClass="col-xs-6">
            <FormControl
              componentClass="select"
              placeholder="Numar persoane"
              value={props.fields.person_count}
              onChange={(e) => props.handleFieldChange('person_count', e)}>
              <option value="4">4 persoane</option>
              <option value="5">5 persoane</option>
              <option value="6">6 persoane</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="type" bsClass="col-xs-6">
            <FormControl
              componentClass="select"
              value={props.fields.type}
              onChange={(e) => props.handleFieldChange('type', e)}>
              <option value="companie">Companie</option>
              <option value="individual">Individual</option>
            </FormControl>
          </FormGroup>
        </div>
        <CButton
          type="submit"
          text="Programează-te"
          size="med" />
      </div>
    </form>
  </BaseModal>
);

export default BookingModal;
