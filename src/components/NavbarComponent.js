import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import indyFiLogo from '../assets/images/indyfiLogo.jpg';

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <Navbar dark expand='md'>
        <NavbarBrand href='/'>
          <img
            src={indyFiLogo}
            alt='IndyFi'
            className='img-fluid'
            width='100'
            height='90'
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar className='ml-auto'>
            <NavItem>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/watch'>
                Watch
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
