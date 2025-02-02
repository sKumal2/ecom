import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

function header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            <Nav.Link href="#services"><i className="fas fa-user"></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default header
