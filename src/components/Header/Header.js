import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className=" shadow-lg py-3 fs-4 sticky-top">
        <Container>
          <Navbar.Brand className="fw-bold text-danger fs-4" href="#home">
            CRM Ticket System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-danger fw-bold navlink" href="#home">
                Home
              </Nav.Link>

              <Nav.Link className="text-danger fw-bold" href="#home">
                About us
              </Nav.Link>
              <Nav.Link className="text-danger fw-bold" href="#home">
                Login
              </Nav.Link>
              <Nav.Link className="text-danger fw-bold" href="#home">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
