import React from "react";
import "./Workouts.css";
import full_body from "./images/full_body.png";
import cardio from "./images/cardio.png";
import upper_body from "./images/upper_body.png";
import core from "./images/core.png";
import { Link } from "react-router-dom";

export default function Workouts() {
  return (
    <div>
      <div class="header">Workouts</div>
      <div class="primary-button-container">
        <Link to="/workoutlist">
          <button class="primary-button">
            <div class="primary-button-div">
              Full Body - 45 minutes
              <img class="poses" src={full_body} />
            </div>
          </button>
        </Link>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Upper Body - 30 minutes
            <img class="poses" src={upper_body}></img>
          </div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Core - 30 minutes
            <img class="poses" src={core}></img>
          </div>
        </button>
      </div>

      <div class="primary-button-container">
        <button class="primary-button">
          <div class="primary-button-div">
            Cardio - 1 hour
            <img class="poses" src={cardio}></img>
          </div>
        </button>
      </div>
    </div>
  );
}
