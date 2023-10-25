import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./giving.scss";
import AppHeader from "../components/Header";
import Appfooter from "../components/Footer";

export default function Giving() {
  return (
    <div>
      <div className="header">
        <header id="header-section">
          {" "}
          <AppHeader />
        </header>
        <div className="section1">
          <p className="section1Paragraph">Giving</p>
          <hr className="section1Hr"></hr>
        </div>
        <div className="section2">
          <Container>
            <Row>
              <Col>
                <p className="mainP">WAYS YOU CAN GIVE:</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="title">M-PESA</p>
                <p className="info"> Kinshasa</p>
                <p className="info"> Rd.Congo</p>
                <p className="info"> +24399-991-698</p>
              </Col>
              <Col>
                {" "}
                <p className="title"> AIRTEL MONEY</p>
                <p className="info">Kinshasa</p>
                <p className="info"> Rd.Congo</p>
                <p className="info"> +24381-452-2504</p>
              </Col>
              <Col>
                {" "}
                <p className="title">ORANGE MONEY </p>
                <p className="info">Branch-Code: 2344</p>
                <p className="info">Numero de compte: 6378463769</p>
                <p className="info">Kinshasa</p>
                <p className="info">Rd.Congo</p>
              </Col>
              <Col>
                <p className="title">Equity Bank</p>{" "}
                <p className="info">Acc No:827497474 </p>{" "}
                <p className="info">Branch No:883737</p>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="footer--pin">
          <Appfooter />
        </footer>
      </div>
    </div>
  );
}
