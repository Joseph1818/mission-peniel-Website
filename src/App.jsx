import React from "react";
import AppHeader from "./components/Header";
import Appfooter from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header id="header-section">
          {" "}
          <AppHeader />
        </header>
      </div>
      <div className="content-section"></div>
      <div className="footer-section">
        {" "}
        <footer className="footer--pin">
          <Appfooter />
        </footer>
      </div>
    </div>
  );
}

export default App;
