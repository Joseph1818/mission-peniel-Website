import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Appfooter from "../components/Footer";
import AppHeader from "../components/Header";
import background5 from "./images/background5.jpeg";
import "./Online.scss";

export default function Online() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {}

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  

  return (
    <div>
      <header id="header-section">
        {" "}
        <AppHeader />
      </header>
      <div
        style={{
          backgroundImage: `url(${background5})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Container>
          <Row>
            <Col>
              {" "}
              <p className="mainTitleStyle">TUNE IN LIVE ON TUESDAY ON</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ textAlign: "right" }}>
                <button
                  className="buttonOnline"
                  style={{
                    backgroundColor: isMouseOver ? "white" : "black",
                    color: isMouseOver ? "black" : "white",
                  }}
                  onClick={handleClick}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  FACEBOOK
                </button>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: "center" }}>
                <button
                  className="buttonOnline"
                  style={{
                    backgroundColor: isMouseOver ? "white" : "black",
                    color: isMouseOver ? "black" : "white",
                  }}
                  onClick={handleClick}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  YOUTUBE
                </button>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: "" }}>
                <button
                  className="buttonOnline"
                  style={{
                    backgroundColor: isMouseOver ? "white" : "black",
                    color: isMouseOver ? "black" : "white",
                  }}
                  onClick={handleClick}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  INSTAGRAM
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="serviceTime1">ONLINE SERVICE TIMES: </p>
            <p className="serviceTime2">EVERY TUESDAY 8:00pm</p>
          </Row>

          <Row>
            <Col>
              {" "}
              <p className="mainTitleStyle">OR CHECK OUT...</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ textAlign: "right" }}>
                <button
                  className="buttonOnline"
                  style={{
                    backgroundColor: isMouseOver ? "white" : "black",
                    color: isMouseOver ? "black" : "white",
                  }}
                  onClick={handleClick}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  PAST SERMONS
                </button>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: "" }}>
                <button
                  className="buttonOnline"
                  style={{
                    backgroundColor: isMouseOver ? "white" : "black",
                    color: isMouseOver ? "black" : "white",
                  }}
                  onClick={handleClick}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  PODCASTS
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-section">
        {" "}
        <footer className="footer--pin">
          <Appfooter />
        </footer>
      </div>
    </div>
  );
}
