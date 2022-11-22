import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
            <Link to="/User" className="nav-link">User</Link>
            <Link to="/User/Sonu" className="nav-link">Sonu</Link>
            <Link to="/User/Jyoti" className="nav-link">Jyoti</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
