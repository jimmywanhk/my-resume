import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  closeNavbar() {
    this.setState({
      collapsed: true,
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div>
        <Navbar
          id="nav-wrap"
          className="navbar-expand-md navbar-toggleable-md ng-white mb-3"
          light
        >
          <Container>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-md-inline-flex flex-md-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink
                    onClick={this.closeNavbar}
                    className="text-light nav-item current"
                    href="#home"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeNavbar}
                    className="text-light nav-item"
                    href="#about"
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeNavbar}
                    className="text-light nav-item"
                    href="#resume"
                  >
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeNavbar}
                    className="text-light nav-item"
                    href="#portfolio"
                  >
                    Works
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeNavbar}
                    className="text-light nav-item"
                    href="#testimonials"
                  >
                    Testimonials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeNavbar}
                    className="text-light nav-item"
                    href="#contact"
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
