import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contactUs.scss";
import AppHeader from "../components/Header";
import Appfooter from "../components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ContactUs() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="">
      <div className="header">
        <header id="header-section">
          {" "}
          <AppHeader />
        </header>
      </div>
      <div className="section1">
        <p className="section1Paragraph">CONTACT US</p>
        <hr className="section1Hr"></hr>
      </div>

      <div className="section2">
        <hr></hr>
        <Container>
          <Row>
            <Col>
              <h2 className="h2">Get in Contact</h2>
              <hr className="section2Hr"></hr>
              <form method="post" onSubmit={handleSubmit} className="formDiv">
                <div>
                  <label for="name">Your Name (required)</label>
                  <input
                    autoFocus
                    type="text"
                    name="name"
                    id=""
                    onChange={handleChange}
                    value={data.name}
                  />
                  <label for="name">Your Email (required)</label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    onChange={handleChange}
                    value={data.email}
                  />
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id=""
                    onChange={handleChange}
                    value={data.subject}
                  />
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    id=""
                    colos="30"
                    rows="10"
                    onChange={handleChange}
                    value={data.message}
                  />
                  <button type="submit">Send</button>
                </div>
              </form>
            </Col>
            <Col>
              <h2 className="h2">Mission Peniel Office</h2>
              <hr className="section2Hr"></hr>
              <div>
                <h1 className="title">Telephone</h1>
                <h1
                  className="
                info"
                >
                  {" "}
                  + 243 814 522 504
                </h1>
                <h1 className="title">Whatsapp</h1>
                <h1
                  className="
                info"
                >
                  + 243 999 916 698
                </h1>
                <h1 className="title">Email</h1>
                <h1
                  className="
                info"
                >
                  MissionPeniel@info.com
                </h1>
                <h1 className="title">Office Hours</h1>
                <h1
                  className="
                info"
                >Tuesday and friday, 9:00am to 4:00pm</h1>
                <h1 className="title">Office Adress</h1>
                <h1
                  className="
                info"
                >
                  Kinshasa, Lingwala, 64 Faradje
                </h1>
                <h1 className="title">Banking details</h1>
                <h1
                  className="
                info"
                >
                  {" "}
                  Equity Bank Acc No:827497474 Branch No:883737
                </h1>
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
