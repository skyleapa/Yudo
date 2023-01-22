import React from "react";
import "./WorkoutList.css";
import { Link } from "react-router-dom";

export default function WorkoutList() {
  return (
    <div>
      {/* <h1 color="white">Hi</h1> */}

      <div class="header">Workouts</div>
      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Test</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Arg</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Stink</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Oof</div>
        </button>
      </div>
    </div>
  );
}
