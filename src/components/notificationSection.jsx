import React, { useState } from "react";
import "./notificationSection.scss";
import img1 from "./images/church-youth-conference-flyer-design.jpg";

export default function AppNotification() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {}

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="AppNotificationContent">
      <div className="" style={{ backgroundColor: "white", height: "380px" }}>
        <p className="Title">COMING UP:</p>
        <div className="notGrid">
          <div className="image-row">
            <div>
              <img src={img1} className="image"></img>
            </div>
          </div>
          <div className="buttonDiv" style={{ textAlign: "center" }}>
            <button
              style={{ borderColor: isMouseOver ? "white" : "black" }}
              onClick={handleClick}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              MORE INFO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
