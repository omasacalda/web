import React, { Component } from 'react';

import { hero, donation, volunteer } from '../../../../assets/images';

import MainTemplate from '../../../../components/Templates/Main';
import CButton from '../../../../components/CButton';
import CCardBig from '../../../../components/CCardBig';

export default class Homepage extends Component {
  render() {
    return (
      <MainTemplate className="homepage">
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
          <div className="info">
            <h1>O Masă Caldă</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <CButton
              text="Înscrie-te"
              size="med" />
            <span className="subtext">Porții servite: 69.452</span>
          </div>
        </section>
        <section className="cardBig-container">
          <div className="row">
            <h1>
              VREI SĂ AJUȚI?
          </h1>
          <p>Vezi cum poți face diferența.</p>
            <div className="col-sm-6">
              <CCardBig
                image={donation}
                size="med"
                title="Donează!"
                text="AFLĂ MAI MULTE"
              />
            </div>
            <div className="col-sm-6">
              <CCardBig
                image={volunteer}
                size="med"
                title="Fii voluntar!"
                text="AFLĂ MAI MULTE"
              />
            </div>
          </div>
        </section>
      </MainTemplate>
    );
  }
}
