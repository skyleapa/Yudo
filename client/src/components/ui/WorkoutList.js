import React from "react";
import "./WorkoutList.css";
import { Link } from "react-router-dom";

export default function WorkoutList() {
  return (
    <div>
      {/* <h1 color="white">Hi</h1> */}

      <div class="header">Exercise Set</div>
      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Plank</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Jump-Rope</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Sit-Ups</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Squats</div>
        </button>
      </div>
    </div>
  );
}
