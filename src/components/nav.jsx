

import React from 'react'
import '../Styles/navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigation() {
  return (
    <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><b><i>Mana</i></b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link ><Link to="/">Home</Link></Nav.Link>
          
          <Nav.Link><Link to="/login">About Us</Link></Nav.Link>
          <Nav.Link ><Link to="/login">Dishes</Link></Nav.Link>

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
            <Nav.Link ><Link to="/signup">Sign Up</Link></Nav.Link>
            <Nav.Link eventKey={2} >
            <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Link to="/login">Cart</Link>
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
