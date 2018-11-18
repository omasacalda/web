import React from "react";
import CCButton from "../../../../components/../../../components/CButton/index";

const Row = props => (
  <div className="row">
    <div className="col-12 col-sm-6 image-container-left">
      <img src={props.leftImageSrc} alt={props.leftAlt} />
      
    </div>
    <div className="col-12 col-sm-6 image-container-right">
      <img src={props.rightImageSrc} alt={props.rightAlt} />
      
    </div>
  </div>
);

export default Row;
