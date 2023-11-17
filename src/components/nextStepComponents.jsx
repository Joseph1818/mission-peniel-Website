import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./nextStepComponents.scss";

export default function NextStepComponents() {
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
      <Container>
        <Row>
          <Col>
            <p className="mainStyleNextComponents">WE ARE BETTER TOGETHER</p>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <p className="SecondStyleNextComponents">
              We have a variety of groups available, no matter your age,
              location or life stage we’re sure we have something for you.
            </p>
            <p className="SecondStyleNextComponents">
              Browse by selecting one of the categories below.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                ADULTS
              </button>
            </div>
          </Col>
          <Col md="auto">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                FAMILIES
              </button>
            </div>
          </Col>
          <Col xs lg="2">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                WOMEN
              </button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                MEN
              </button>
            </div>
          </Col>
          <Col md="auto">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                YOUNG ADULTS
              </button>
            </div>
          </Col>
          <Col xs lg="2">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                SENIORS
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="ThirdStyleNextComponents">
              Struggling to find a group? We’re here to help!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            {" "}
            <div className="buttonDiv" style={{ textAlign: "center" }}>
              <button
                className="buttonNext"
                style={{ borderColor: isMouseOver ? "white" : "black" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
              FIND A GROUP!
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
