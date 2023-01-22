import React from "react";
import "./Exercises.css";
import full_body from "./images/full_body.png";

export default function Exercises() {
  return (
    <div>
      <div class="header">Exercises</div>
      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Planks</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Sit Ups</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Leg Raises</div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">Pushups</div>
        </button>
      </div>
    </div>
  );
}
