import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function AppNavbar() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Courtney Long</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">About Me</Nav.Link>
        <Nav.Link as={Link} to="/work">Work</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
        <NavDropdown title="Resume" id="basic-nav-dropdown">
          <NavDropdown.Item href="./Assets/myResume.pdf.pdf" download>Download</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default AppNavbar;