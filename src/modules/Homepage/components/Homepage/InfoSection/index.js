import React from 'react';

const InfoSection = (props) => (
  <div className="container-fluid info-section" style={{ backgroundColor: props.backgroundColor }}>
    <div className="col-sm-3"></div>
    <div className="col-sm-6 text-container">
      <h3>
        {props.title}
      </h3>
      <p>
        {props.text}
      </p>
    </div>
  </div>
);

export default InfoSection;