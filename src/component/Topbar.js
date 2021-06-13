import React from 'react';
import Avtar from '../asset/avtar.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


function Topbar(){
    return <div className="fixedNav">
      
    <Navbar fixed="top" className="navbar"  expand="lg">
  <Navbar.Brand id="navSymbol"  href="#">SYMBOL</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto navBar">
      <Nav.Link className="navHover" href="#">BILLING SYSTEM</Nav.Link>
      <Nav.Link className="navHover" href="#">SALES</Nav.Link>
      <Nav.Link className="navHover" href="#">INVENTORY MANAGEMENT</Nav.Link>
      <Nav.Link className="navHover" href="#">COUPON GENERATOR</Nav.Link>
    </Nav>
    <Image className="avtarImage" src={Avtar} roundedCircle />
  </Navbar.Collapse>
</Navbar>
      
    </div>
}
export default Topbar;