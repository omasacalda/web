import React, { Component } from "react";

import { hero } from "../../../../assets/images";

import MainTemplate from "../../../../components/Templates/Main";
import LoginForm from './Form';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  componentDidMount() {
    this.props.autoLogin();
  }

  handleFieldChange(name, event) {
    this.props.setField(name, event.target.value);
  }

  submitLoginForm(e) {
    e.preventDefault();

    this.props.login(this.props.fields);
  }

  render() {
    const props = this.props;

    return (
      <MainTemplate className="homepage admin">
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
          <div className="info">
            <LoginForm
              fields={props.fields}
              handleFieldChange={this.handleFieldChange}
              submitLoginForm={this.submitLoginForm} />
          </div>
        </section>
      </MainTemplate>
    );
  }
}
