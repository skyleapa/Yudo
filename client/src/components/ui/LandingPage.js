import React from "react";
import "./LandingPage.css";
import icon from "./images/icon.png";
import wave from "./images/wave.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const styles = {
    body: {
      backgroundImage: `url(${wave})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom bottom",
      height: "100vh",
      width: "100vw",
      backgroundPositionY: "-250px",
    },
  };

  return (
    <div class="main-div" style={styles.body}>
      <div class="header-div">
        <h1 class="header">Your fitness journey starts here.</h1>
        <p class="description">Innovating exercise with technology.</p>
        <Link to="/workouts">
          <button class="begin-button">begin</button>
        </Link>
      </div>

      <div>
        <img class="yudo" src={icon} />
      </div>
    </div>
  );
}
