import React  from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import BaseModal from '../../../../../components/BaseModal';
import CButton from '../../../../../components/CButton';

const HomeModal = (props) => (
  <BaseModal
    className="home-modal"
    ref={props.modalRef}
    {...props}>
    <p className="title">O Masă Caldă</p>
    <p className="info">Salut, în acest moment calendarul este disponibil doar pentru Cluj-Napoca. Mulțumim!</p>
    <FormGroup controlId="formControlsSelect">
      <FormControl
        componentClass="select"
        placeholder="Selectati Orasul"
        onChange={props.onCityChange}
        defaultValue={0}>
        <option value="0" disabled>Selectati Orasul...</option>
        {props.cities.length > 0 ? props.cities.map((item, key) => {
          return (
            <option key={key} value={item.id}>{item.name}</option>
          );
        }) : null}
      </FormControl>
    </FormGroup>
    {props.selectedCity &&
    <CButton
      text="Înscrie-te"
      size="med"
      onClick={props.navigateToCalendar} />}
  </BaseModal>
);

export default HomeModal;
