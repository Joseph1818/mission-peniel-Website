import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
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
                <img className="brandLogo" src="../images/M-pesa-logo.png" />
                <p className="title">M-PESA</p>
                <p className="info"> Kinshasa</p>
                <p className="info"> Rd.Congo</p>
                <p className="info"> +24399-991-698</p>
              </Col>
              <Col>
                {" "}
                <img className="brandLogo" src="../images/airtelMoney.png" />
                <p className="title"> AIRTEL MONEY</p>
                <p className="info">Kinshasa</p>
                <p className="info"> Rd.Congo</p>
                <p className="info"> +24381-452-2504</p>
              </Col>
              <Col>
                {" "}
                <img
                  className="brandLogo"
                  src="../images/orange-money-logo.png"
                />
                <p className="title">ORANGE MONEY </p>
                <p className="info">Kinshasa</p>
                <p className="info">Rd.Congo</p>
                <p className="info">+24375-748-9478</p>
              </Col>
              <Col>
                <img
                  className="brandLogo"
                  src="../images/Equity_Group_Logo.png"
                />
                <p className="title">EQUITY BANK</p>{" "}
                <p className="info">Acc No:827497474 </p>{" "}
                <p className="info">Branch No:883737</p>
              </Col>
            </Row>
            <p className="secondP">They are three type of giving;</p>
          </Container>
          <Container>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Tithe</Accordion.Header>
                <Accordion.Body>
                  Tithing is a practice where individuals give a portion of
                  their income to support their religions community. God
                  encourages beleivers to give 10% of their income, as a way to
                  honor Him and support the work of the church. it's seen as an
                  act of feith and obedience. it's a way to show gratitude and
                  support. “A tithe of everything…belongs to the Lord; it is
                  holy to the Lord.” Leviticus 27:30
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Offerings</Accordion.Header>
                <Accordion.Body>
                  God encourages beleivers to give offerings in addition to
                  tithes. Offerings are voluntary and can be given as a way to
                  express gratitude, support specific causes, or help those in
                  need. it's a personal and heartfelt expression of worship.
                  "Each of you should give what you have decided in your heart
                  to give, not reluctantly or under compulsion, for God loves a
                  cheerful giver."-2 Corinthians 9:7
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Gift of Giving</Accordion.Header>
                <Accordion.Body>
                  The Gift of Giving is a beautiful trait that brings joy and
                  fulfillment to both the giver and the receiver. It's about
                  selflessly sharing our resources, time, and talents to make a
                  positive impact in the lives of others. Through giving, we can
                  spread love, compassion, and make a difference in the world.
                  Discover the power of giving and experience the joy it
                  brings!. "Each of you should give what you have decided in
                  your heart to give, not reluctantly or under compulsion, for
                  God loves a cheerful giver." - 2 Corinthians 9:7. It reminds
                  us that giving should come from a place of joy and
                  willingness, rather than obligation.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
        <footer className="footer--pin">
          <Appfooter />
        </footer>
      </div>
    </div>
  );
}
