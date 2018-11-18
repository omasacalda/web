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
    <CButton
      text="Programează-te"
      size="med" />
  </BaseModal>
);

export default BookingModal;
