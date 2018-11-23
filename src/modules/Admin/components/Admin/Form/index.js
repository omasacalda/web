import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import CButton from "../../../../../components/CButton";

const LoginForm = (props) => (
  <form onSubmit={props.submitLoginForm}>
    <FormGroup controlId="email">
      <FormControl
        required
        type="email"
        placeholder="Email"
        value={props.fields.email}
        onChange={(e) => props.handleFieldChange('email', e)}
      />
      <FormControl.Feedback />
    </FormGroup>
    <FormGroup controlId="password">
      <FormControl
        required
        type="password"
        placeholder="Password"
        value={props.fields.password}
        onChange={(e) => props.handleFieldChange('password', e)}
      />
      <FormControl.Feedback />
    </FormGroup>
    <CButton
      type="submit"
      text="Login"
      size="med" />
  </form>
);

export default LoginForm;
