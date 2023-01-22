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
          Full Body - 45 minutes, 9 exercises
        </button>
      </div>
      <div class="primary-button-container">
        <button class="primary-button">
          Upper Body - 30 minutes, 6 exercises
        </button>
      </div>
      <div class="primary-button-container">
        <button class="primary-button">Core - 30 minutes, 15 exercises</button>
      </div>
      <div class="primary-button-container">
        <button class="primary-button">Cardio - 1 hour, 3 exercises</button>
      </div>
    </div>
  );
}
