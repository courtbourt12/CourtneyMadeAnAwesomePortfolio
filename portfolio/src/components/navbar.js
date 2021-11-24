import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Courtney Long</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#work">Work</Nav.Link>
        <Nav.Link href="#contact">Contact Me</Nav.Link>
        <NavDropdown title="Resume" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Download</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Nav;