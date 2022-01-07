import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function AppNavbar() {
  return (
<Navbar bg="dark" expand="lg"
style= {{
  background: "none"
}}>
  <Container>
    <Navbar.Brand as={Link} to="/"
    style= {{
      fontSize: "30px",
      paddingRight: "30px",
      color: "#DFB722"
    }}>Courtney Long</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"
      style= {{
        width: "100%"
      }}>
        <Nav.Link as={Link} to="/about"
         style= {{
          fontSize: "25px",
          paddingRight: "30px",
          color: "#DFB722"
        }}>About Me</Nav.Link>
        <Nav.Link as={Link} to="/work"
         style= {{
          fontSize: "25px",
          paddingRight: "30px",
          color: "#DFB722"
        }}>Work</Nav.Link>
        <Nav.Link as={Link} to="/contact"
         style= {{
          fontSize: "25px",
          paddingRight: "30px",
          color: "#DFB722"
        }}>Contact Me</Nav.Link>
        <NavDropdown title="Resume" id="basic-nav-dropdown"
        style= {{
          fontSize: "25px",
          color: "#DFB722"
        }}>
          <NavDropdown.Item href="./Assets/myResume.pdf.pdf" download>Download</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default AppNavbar;