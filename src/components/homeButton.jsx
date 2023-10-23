import React from "react";
import { Button } from "react-bootstrap";
import "./homeButton.scss";

export default function SectOneButton() {
  return (
    <div className="sectionOneButtonDiv">
      <button className="sectionOneButtonClass">IN-PERSON</button>
      <button className="sectionOneButtonClass">ONLINE</button>
    </div>
  );
}
