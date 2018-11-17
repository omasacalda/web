import React, { Component } from 'react';

import { hero } from '../../../../assets/images';

import MainTemplate from '../../../../components/Templates/Main';
import CButton from '../../../../components/CButton';

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
      </MainTemplate>
    );
  }
}
