import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export class NavMenu extends Component {
  render() {
    return (
      <Navbar
        className="custom-navbar"
        expand="md"
        variant="dark"
        collapseOnSelect="true"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="current" href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#portfolio">Works</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavMenu;
