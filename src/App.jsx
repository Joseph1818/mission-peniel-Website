import React from "react";
import AppHeader from "./components/Header";
import Footer from "./components/Footer";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header id="header">
        {" "}
        <AppHeader />{" "}
      </header>
    </div>
  );
}

export default App;
