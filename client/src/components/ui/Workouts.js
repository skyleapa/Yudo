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
      <div class="header-wo">Workouts</div>
      <Link to="/workoutlists">
        <div class="primary-button-container-wo">
          <button class="primary-button-wo">
            <div class="primary-button-div-wo">
              Full Body - 45 minutes
              <img class="poses-wo" src={full_body} />
            </div>
          </button>
        </div>
      </Link>

      <Link to="/workoutlists">
        <div class="primary-button-container-wo">
          <button class="primary-button-wo">
            <div class="primary-button-div-wo">
              Upper Body - 30 minutes
              <img class="poses-wo" src={upper_body}></img>
            </div>
          </button>
        </div>
      </Link>

      <Link to="/workoutlists">
        <div class="primary-button-container-wo">
          <button class="primary-button-wo">
            <div class="primary-button-div-wo">
              Core - 30 minutes
              <img class="poses-wo" src={core}></img>
            </div>
          </button>
        </div>
      </Link>

      <Link to="/workoutlists">
        <div class="primary-button-container-wo">
          <button class="primary-button-wo">
            <div class="primary-button-div-wo">
              Cardio - 1 hour
              <img class="poses-wo" src={cardio}></img>
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
}
