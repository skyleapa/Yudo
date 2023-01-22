import React from "react";
import "./Exercises.css";
import full_body from "./images/full_body.png";

export default function Exercises() {
  return (
    <div>
      <div class="header-e">Exercises</div>
      <div class="primary-button-container-e">
        <button class="primary-button-e">
          <div class="primary-button-div-e">Planks</div>
        </button>
      </div>

      <div class="primary-button-container-e">
        <button class="primary-button-e">
          <div class="primary-button-div-e">Sit Ups</div>
        </button>
      </div>

      <div class="primary-button-container-e">
        <button class="primary-button-e">
          <div class="primary-button-div-e">Leg Raises</div>
        </button>
      </div>

      <div class="primary-button-container-e">
        <button class="primary-button-e">
          <div class="primary-button-div-e">Pushups</div>
        </button>
      </div>
    </div>
  );
}
