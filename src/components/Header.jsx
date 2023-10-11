import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const logoStyle = {
  width: "50px",
  height: "50px",
};

export default function AppHeader() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <row>
            {" "}
            <Col xs={6} md={4}>
              <Image src="./images/logo3.png" roundedCircle style={logoStyle} />
            </Col>
          </row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#joinAteam">Join a team</Nav.Link>
              <NavDropdown title="Sermons" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ONLINE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  IN-PERSON
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  WATCH-PAST SERMONS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#aboutUs">About-us</Nav.Link>
              <Nav.Link href="#gives">Gives</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
