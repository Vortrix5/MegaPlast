import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="blue" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text" style={{fontSize:22}}>MegaPlast</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="#!">Home</MDBNavLink>
          </MDBNavItem>
          <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Catégorie</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/jardin">Article Jardin</MDBDropdownItem>
                <MDBDropdownItem href="/cuisine">Article Cuisise</MDBDropdownItem>
                <MDBDropdownItem href="/salon">Salon de the</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          <MDBNavItem>
            <MDBNavLink to="#!">Contact</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">A propos</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon style={{fontSize:25}} fas icon="shopping-cart" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" style={{fontSize:20}} to="#!">
              <MDBIcon fas icon="sign-out-alt" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;