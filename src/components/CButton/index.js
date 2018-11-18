import React from 'react';
import { Button } from 'react-bootstrap';

const CButton = (props) => {
  return (
    <Button
      className={`custom-btn ${props.size} ${props.className || ''}`}
      type={props.type || 'button'}
      onClick={props.onClick}>
      {props.text}
    </Button>
  )
};

export default CButton;
