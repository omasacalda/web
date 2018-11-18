import React from 'react';
import { donation, volunteer } from '../../../../../assets/images/index';

import CCardBig from '../../../../../components/CCardBig/index';

const HelpSection = (props) => (
  <section className="cardBig-container">
    <div className="container col-sm-6">
      <h3 className="title">
        VREI SĂ AJUȚI?
          </h3>
      <p>
        Vezi cum poți face diferența
          </p>

      <div className="row">
        <div className="col-12 col-sm-6 card-container" >
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
);

export default HelpSection;
