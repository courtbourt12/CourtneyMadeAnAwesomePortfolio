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
  background: "#ee9617",
  backgroundImage: "linear-gradient(360deg, #fe5858 100%, #fe5858 0%)",
}}>
  <Container>
    <Navbar.Brand as={Link} to="/"
    style= {{
      fontSize: "30px",
      paddingRight: "30px"
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
          paddingRight: "30px"
        }}>About Me</Nav.Link>
        <Nav.Link as={Link} to="/work"
         style= {{
          fontSize: "25px",
          paddingRight: "30px"
        }}>Work</Nav.Link>
        <Nav.Link as={Link} to="/contact"
         style= {{
          fontSize: "25px",
          paddingRight: "30px"
        }}>Contact Me</Nav.Link>
        <NavDropdown title="Resume" id="basic-nav-dropdown"
        style= {{
          fontSize: "25px"
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