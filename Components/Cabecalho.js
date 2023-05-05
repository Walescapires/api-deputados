import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap"


const Cabecalho = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/deputados/">Deputados</Navbar.Brand>
            <Nav className="me-auto">
              <NavDropdown title="Pesquisa" id='basic-nav-dropdown'>
              <NavDropdown.Item href="/deputados/">Perfil</NavDropdown.Item>
              </NavDropdown>
             
              
            </Nav>           
            
        </Container>
        </Navbar>
      </>
    )
  }
  
  export default Cabecalho