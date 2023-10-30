import React from "react";
import "./homeContent.scss";
import SectOneButton from "./homeButton";
import Button from "react-bootstrap/Button";
import background from "./images/BgS11.jpg";
import { ButtonGroup } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";



export default function AppHomeContent() {
  return (
    <div className="AppHomeContent">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 550,
        }}
      >
        <h1 className="h1Style">YOU BELONG HERE</h1>
        <SectOneButton></SectOneButton>
      </div>
    </div>
  );
}
