import React from "react";
import "./EndPage.css";
import { Link } from "react-router-dom";
import icon from "./images/workouts.png";
import config from "../tensorflow/config";

export default function EndPage() {
  return (
    <div>
      <div class="middle-ep">
        <div>
          <div className="EndPage">
            <img class="yudo-ep" src={icon} />
          </div>
        </div>
        <div class="modified-container-ep">
          <button class="modified-button-ep">
            <div class="title-description-ep">
              <p class="title-ep">Congratulations!</p>
            </div>

            <div class="score-container-ep">
              <button class="score-ep">
              Average Score: {global.config.score}
              Feedback: {global.config.insult}
              </button>
            </div>

            <div class="key-buttons-ep">
              <Link to="/">
                <button class="begin-button-ep">home</button>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
