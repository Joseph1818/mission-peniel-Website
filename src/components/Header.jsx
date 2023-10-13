import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const logoStyle = {
  width: "50px",
  height: "50px",
  marginRight: "10px",
};

export default function AppHeader() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <row>
            {" "}
            <Col xs={6} md={4}>
              <Image src="./images/logo3.png" roundedCircle style={logoStyle} />
            </Col>
          </row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="underline">
              <Nav.Link className="" href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#aboutUs">About us</Nav.Link>
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
              <Nav.Link href="#gives">Gives</Nav.Link>
              <Nav.Link href="#contactUs">Contact Us</Nav.Link>
            </Nav>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Button href="#" type="submit" variant="light">
                    Register
                  </Button>{" "}
                  <Button href="#" type="submit" variant="dark">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
