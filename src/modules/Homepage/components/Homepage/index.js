import React, { Component } from "react";

import {
  hero,
  cluj,
  bucuresti,
  bistrita,
  constanta,
  zalau,
  satuMare
} from "../../../../assets/images/index";

import MainTemplate from "../../../../components/Templates/Main/index";
import CButton from "../../../../components/CButton/index";
import HelpSection from "./HelpSection/index";
import Modal from "./Modal/index";
import InfoSection from "./InfoSection/index";
import Towns from './Towns/index';

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <CButton text="Înscrie-te" size="med" onClick={this.showModal} />
            <span className="subtext">Porții servite: 69.452</span>
          </div>
        </section>

        <InfoSection
          title={'Asociația "O masă caldă'}
          text="apără dreptul fiecăruia de a se implica voluntar în comunitate indiferent de vârstă, avere, convingeri politice,
        naționalitate, rasă, sex, religie sau orientare sexuala, etc."
          backgroundColor="#37AFC7"
        />

        <HelpSection />

        <InfoSection
          title={"Cine beneficiează?"}
          text="Oricine poate beneficia de o masă caldă. Nu privim etnia, vărsta, condiția materială sau la îmbrăcămintea celor care vin să primească mâncare.
        Hrana este o nevoie de bază si cei care vin la cantinele noastre chiar au nevoie de ea. Printre cei care primesc o masă caldă sunt copii din familii
        cu dificulități financiare, oameni fără adăpost, oameni care se află la limita sărăciei. 
        În România, 41,7% din populație se află la risc de sărăcie."
          backgroundColor="#EEC43E"
        />

        <Towns/>

        <Modal
          modalRef={ref => (this.modal = ref)}
          onCityChange={this.onCityChange}
          navigateToCalendar={this.navigateToCalendar}
          cities={props.cities}
          selectedCity={props.selectedCity}
        />
      </MainTemplate>
    );
  }
}
