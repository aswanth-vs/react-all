import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="heading">
      <Container>
        <Navbar.Brand href="/" className="text-center">
          TEST
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
