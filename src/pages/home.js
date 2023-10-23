import React from "react";
import AppHeader from "../components/Header";
import Appfooter from "../components/Footer";
import AppHomeContent from "../components/homeContent";
import AppNotification from "../components/notificationSection";
import "../App.scss";


export default function Home() {
  return (
    <div className="HomePage">
      <div className="header">
        <header id="header-section">
          {" "}
          <AppHeader />
        </header>
      </div>
      <div className="content-section">
        <AppHomeContent />
      </div>
      <div className="notification-Section">
        <AppNotification />
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
