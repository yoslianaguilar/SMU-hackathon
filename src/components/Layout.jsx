import React from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import logo from '../images/logo.png'
import '../sytles/layout.css'

export const Layout = ({children}) => {
    return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Unimarc
         {/* <img src={logo} alt="Hootie Hoo" width='40px' /> */}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav"> 
          <Nav className="navbar-nav ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/recipes">Recetas</Nav.Link>
            <Nav.Link href="/about">Nosotros</Nav.Link>
            <Nav.Link href="/contacts">Contacto</Nav.Link>
            <Nav.Link href="/legalbases">Bases Legales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='content' >
        {children}
      </div>
    </div>
  )
} 