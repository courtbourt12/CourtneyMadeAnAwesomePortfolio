import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'
import Resume from '../assets/Documents/myResume.pdf.pdf'
import "../styling/Navbar.css";

function AppNavbar() {
  return (
<Navbar  expand="lg"
style= {{
  background: "black"
}}>
  <Container>
    <Navbar.Brand as={Link} to="/"
    style= {{
      fontSize: "30px",
      paddingRight: "30px",
      color: "#DFB722"
    }}>Courtney Long</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "1px solid#DFB722"}}/>
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
        <Nav.Link href={Resume} download
         style= {{
          fontSize: "25px",
          paddingRight: "30px",
          color: "#DFB722"
        }}>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default AppNavbar;