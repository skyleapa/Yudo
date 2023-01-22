import React from "react";
import "./Workouts.css";

export default function Workouts() {
  function panelButton() {
    alert("test");
  }

  return (
    <div>
      <div class="header">Workouts</div>
      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Full Body - 45 minutes, 9 exercises
            <img src=""></img>
          </div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Upper Body - 30 minutes, 6 exercises
            <img src=""></img>
          </div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Core - 30 minutes, 15 exercises
            <img src=""></img>
          </div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Cardio - 1 hour, 3 exercises
            <img src=""></img>
          </div>
        </button>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 2a1a229b1aa24e77d98cce88536a9f715dcf1207
