import React from "react";
import "./about.scss";
import Section2 from "../components/aboutUsComponent";
import AppHeader from "../components/Header";
import Appfooter from "../components/Footer";

export default function About() {
  return (
    <div>
      <div className="header">
        <header id="header-section">
          {" "}
          <AppHeader />
        </header>
        <div className="section1">
          <p className="section1Paragraph">ABOUT US</p>
          <hr className="section1Hr"></hr>
        </div>
        <Section2 />
        <div className="footer-section">
          {" "}
          <footer className="footer--pin">
            <Appfooter />
          </footer>
        </div>
      </div>
    </div>
  );
}
