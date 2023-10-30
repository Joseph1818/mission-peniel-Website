import React from "react";
import AppHeader from "../components/Header";
import Appfooter from "../components/Footer";

import "./Inperson.scss";
import background2 from "./images/background3.jpeg";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Inperson() {
  return (
    <div>
      <header id="header-section">
        {" "}
        <AppHeader />
      </header>
      <div
        style={{
          backgroundImage: `url(${background2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 450,
        }}
      >
        <h1 className="h1Online">IN-PERSON SERVICE</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="Map">
              <iframe
                width="500"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=64%20faradje%20kasa-vubu%20kinshasa+(Mission%20Peniel%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Calculate population in area
                </a>
              </iframe>
            </div>
            <p className="titleStyle">Kinshasa Campus</p>
            <p className="infoStyle"> 64 Faradje, Q/ Shaba C/ Kasava-Vubu</p>
            <p className="timeStyle"> Service Time: </p>
            <p className="time2Style">Tuesday 8Pm</p>
          </Col>
          <Col>
            <div className="Map">
              <iframe
                width="500"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=8FW8+JR6,%20Av.%20de%20la%20R%C3%A9volution,%20Lubumbashi,%20Congo%20-%20Kinshasa+(Mission%20Peniel%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">Population mapping</a>
              </iframe>
            </div>
            <p className="titleStyle">Lubumbashi Campus</p>
            <p className="infoStyle">5 De la revolution, Q/ Boduin C/ Golf</p>
            <p className="timeStyle"> Service time: </p>
            <p className="time2Style">Tuesday 8:00Pm</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="WhatToExpect"> WHAT TO EXPECT</p>
            <p className="infoStyle2">
              Upon arrival at any of our locations, our friendly Parking Team
              will show you to a suitable parking bay.
            </p>
            <p className="infoStyle2">
              From here, you can check your kids into Kids Church and come into
              the main auditorium for the service.
            </p>{" "}
            <p className="infoStyle2">
              Our Usher Team will be waiting to show you to your seat. Our
              services are usually just over an hour long, and include worship,
              prayer, and a message.
            </p>{" "}
          </Col>
        </Row>
      </Container>
      <div className="footer-section">
        {" "}
        <footer className="footer--pin">
          <Appfooter />
        </footer>
      </div>
    </div>
  );
}
