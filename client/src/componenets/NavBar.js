import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#bio">Navbar</Navbar.Brand>
          <Nav className="me-auto text-center">
            <Nav.Link href="#bio">Home</Nav.Link>
            <Nav.Link href="#myshtuff">Features</Nav.Link>
            <Nav.Link href="#contact">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar();
