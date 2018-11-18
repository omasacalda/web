import React, { Component } from 'react';

import { hero, donation, volunteer } from '../../../../assets/images/index';

import MainTemplate from '../../../../components/Templates/Main/index';
import CButton from '../../../../components/CButton/index';
import CCardBig from '../../../../components/CCardBig/index';
import Modal from './Modal/index';

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.navigateToCalendar = this.navigateToCalendar.bind(this);
  }

  showModal() {
    this.props.getCities();
    this.modal.openModal();
  }

  onCityChange(e) {
    this.props.setCity(e.target.value);
  }

  navigateToCalendar() {
    this.props.history.push(`/calendar/${this.props.selectedCity.slug}`);
  }

  render() {
    const props = this.props;

    return (
      <MainTemplate className="homepage">
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
          <div className="info">
            <h1>O Masă Caldă</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <CButton
              text="Înscrie-te"
              size="med"
              onClick={this.showModal} />
            <span className="subtext">Porții servite: 69.452</span>
          </div>
        </section>

        <section className="cardBig-container">
          <div className="container">
            <h3 className="title">
              VREI SĂ AJUȚI?
            </h3>
            <p>
              Vezi cum poți face diferența
            </p>
            <div className="row">
              <div className="col-12 col-sm-6 left-card-container">
                <CCardBig
                  size="med"
                  image={donation}
                  title="Donează!"
                  text="Află mai multe"
                />
              </div>
              <div className="col-12 col-sm-6 right-card-container">
                <CCardBig
                  size="med"
                  image={volunteer}
                  title="Fii voluntar!"
                  text="Află mai multe"
                />
              </div>
            </div>
          </div>
        </section>

        <Modal
          modalRef={ref => this.modal = ref}
          onCityChange={this.onCityChange}
          navigateToCalendar={this.navigateToCalendar}
          cities={props.cities}
          selectedCity={props.selectedCity}
        />
      </MainTemplate>
    );
  }
}
