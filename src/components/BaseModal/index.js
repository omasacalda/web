import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class BaseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  onHide() {
    this.closeModal();
    if (this.props.onHide) {
      this.props.onHide();
    }
  }

  render() {
    return(
      <Modal className={`custom-modal ${this.props.className || ''}`} show={this.state.open} onHide={this.onHide}>
        <Modal.Header closeButton>
          {this.props.title && <Modal.Title>{this.props.title}</Modal.Title>}
        </Modal.Header>

        <Modal.Body>
          {this.props.children}
        </Modal.Body>
      </Modal>
    );
  }
}
