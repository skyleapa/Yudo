import React from "react";
import "./WorkoutList.css";
import { Link } from "react-router-dom";

export default function WorkoutList() {
  return (
    <div>
      <div class="main-div-wol">
        <div class="header-div-wol">
          <div>
            <p class="header-wol">Core Exercises</p>
          </div>
          <p class="description-wol">
            Those abs are no longer just a dream. <br /> Focused to tone your abs and
            obliques.
          </p>
        </div>

        <div>
          <div class="modified-container-wol">
            <button class="modified-button-wol">
              <div>
                <ul class="ul-wol-div">
                  <li class="ul-wol">30 minutes</li>
                  <li class="ul-wol">20 second breaks</li>
                  <li class="ul-wol">15 exercises</li>
                  <li class="ul-wol">2 reps each</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* <div class="list-wol">Plank - 30 Seconds</div> */}

      <div class="primary-buttons-wol">
        <div class="primary-button-container-wol">
          <button class="primary-button-wol">
            <div class="primary-button-div-wol">Plank - 30 Seconds</div>
          </button>
        </div>

        {/* <div class="primary-button-container">
          <button class="primary-button">
            <div class="primary-button-div">Jump-Rope</div>
          </button>
        </div> */}

        <div class="primary-button-container-wol">
          <button class="primary-button-wol">
            <div class="primary-button-div-wol">Sit-Ups - 30 Seconds</div>
          </button>
        </div>

        <div class="primary-button-container-wol">
          <button class="primary-button-wol">
            <div class="primary-button-div-wol">Leg Raises - 30 Seconds</div>
          </button>
        </div>
      </div>

      <div class="key-buttons-wol">
        <Link to="/workouts">
          <button class="begin-button-wol">back</button>
        </Link>
        <Link to="/demopage">
          <button class="begin-button-wol">next</button>
        </Link>
      </div>
    </div>
  );
}
