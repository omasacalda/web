import React from 'react'
import { Panel } from 'react-bootstrap'
import CButton from '../CButton'

const CCardBig = (props) => {
  return (
    <Panel
      className={`customBig-card ${props.size} ${props.className || ''}`}
      onClick={props.onClick}
    >
      <img className="card-image" src={props.image} alt="Image not found" />
      <h3>
        {props.title}
      </h3>
      <CButton
        text={props.text}
        size="lg"
      />
    </Panel>
  )
}

export default CCardBig;