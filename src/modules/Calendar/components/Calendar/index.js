import React, { Component } from 'react';

import MainTemplate from '../../../../components/Templates/Main/index';

import InfoCard from './InfoCard';
import Bookings from './Bookings';

export default class Calendar extends Component {
  render() {
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
        <Bookings />
      </MainTemplate>
    );
  }
}
