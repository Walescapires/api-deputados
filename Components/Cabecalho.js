import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap"


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/deputados">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/deputados">Deputados</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho