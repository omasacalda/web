import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { logo } from '../../assets/images';

export default class Header extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    const props = this.props,
      currentUser = props.currentUser;

    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/" activeClassName="">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/calendar/cluj-napoca">
                <NavItem>Programări</NavItem>
              </LinkContainer>

              {currentUser && currentUser.id !== null ?
                <LinkContainer to="/logout">
                  <NavItem>
                    <FontAwesomeIcon icon="user" /> Logout
                  </NavItem>
                </LinkContainer> : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
