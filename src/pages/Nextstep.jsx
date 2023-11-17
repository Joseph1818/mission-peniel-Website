import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NextStepComponents from "../components/nextStepComponents";
import "./Nextstep.scss";
import background from "./images/background9-fotor9.png";
import Appfooter from "../components/Footer";
import AppHeader from "../components/Header";

export default function Nextstep() {
  return (
    <div>
      <header id="header-section">
        {" "}
        <AppHeader />
      </header>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 250,
        }}
      >
        <Container>
          <Row>
            <p className="mainTitleNextStep">Connects Group</p>
          </Row>
        </Container>
      </div>
      <NextStepComponents />
      <div className="footer-section">
        {" "}
        <footer className="footer--pin">
          <Appfooter />
        </footer>
      </div>
    </div>
  );
}
