import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Mana</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#dish">Dishes</Nav.Link>

          <NavDropdown title="Specials" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Main Course
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Snacks</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Deserts</NavDropdown.Item>

            <NavDropdown.Divider />
            
            <NavDropdown.Item href="#action/3.4">
              Others
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">Sign up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
