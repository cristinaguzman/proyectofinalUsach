import React from 'react'
import '../../styles/Header/Header.scss';

import coffe from '../../static/Logo/coffe.svg';
import shop from '../../static/Logo/shop.svg';

 
import { Navbar, Container,Nav} from 'react-bootstrap';
 

export function Header() {
  return (
 
 <Navbar bg="light" expand="lg">
  <Container>
  <a href='/'><img className='logo' src={coffe}  alt="logo" /></a>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center">
      <Nav className="align-items-center">
    
        <Nav.Link href="#home" className='f-custom'>Inicio</Nav.Link>
        <Nav.Link href="#link" className='f-custom'>Contacto</Nav.Link>
   
      </Nav>
      <Nav className="d-flex  w-lg-50 w-100  gap-5 justify-content-md-center justify-content-lg-end  align-items-center">
      {/* <a href='/'className='nav-c__btn'>Login</a> */}
      <a href='/'><img src={shop} alt="shop"  /></a>
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
  )
}
