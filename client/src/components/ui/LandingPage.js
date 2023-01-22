import React from "react";
import "./LandingPage.css";
import icon from "./images/icon.png";

export default function LandingPage() {
  return (
    <div class="main-div">
      <div class="header-div">
        <h1 class="header">Your fitness journey starts here.</h1>
        {/* changing text generator here */}
        <p class="description">Innovating exercise with technology.</p>
        {/* button */}
        <button class="begin-button">begin</button>
      </div>
      <div>
        <img class="yudo" src={icon} />
      </div>
    </div>
  );
}
