import React from "react";
import Row from "./Row/index";
import {
  cluj,
  bucuresti,
  bistrita,
  constanta,
  zalau,
  satuMare
} from "../../../../../assets/images/index";

const Towns = props => (
  <div className="container-fluid">
    <div className="col-sm-3" />
    <div className="col-12 col-sm-6">
      <h3>POVESTEA NOASTRĂ</h3>
      <p>Cum a început totul...</p>
      <Row
        leftImageSrc={cluj}
        rightImageSrc={bucuresti}
        leftTitle="Cluj-Napoca"
        rightTitle="Bucuresti"
        leftAlt="Cluj"
        rightAlt="Bucruresti"
      />
      <Row
        leftImageSrc={satuMare}
        rightImageSrc={bistrita}
        leftTitle="Satu-Mare"
        rightTitle="Bistrita"
        leftAlt="Satu-Mare"
        rightAlt="Bistrita"
      />
      <Row
        leftImageSrc={constanta}
        rightImageSrc={zalau}
        leftTitle="Constanta"
        rightTitle="Zalau"
        leftAlt="Constanta"
        rightAlt="Zalau"
      />
    </div>
  </div>
);

export default Towns;
