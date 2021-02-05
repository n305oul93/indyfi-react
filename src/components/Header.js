import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import indyFiLogo from '../images/indyfi.jpg';

class Header extends Component {
  render() {
    return (
      <Navbar dark color='primary'>
        <NavbarBrand href='/'>IndyFi Logo Image</NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;
