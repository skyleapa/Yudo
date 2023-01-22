import React from "react";
import "./DemoPage.css";
import { Link } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

export default function DemoPage() {
  return (
    <div>
      <div class="header-dp">Demonstration</div>

      <div class="middle-dp">
        <div>
          <div className="DemoPage">
            <YoutubeEmbed embedId="pvIjsG5Svck" />
          </div>
        </div>
        <div class="modified-container-dp">
          <button class="modified-button-dp">
            <div class="title-description-dp">
              <p class="title-dp">Plank Tips</p>
              <ul class="ul-dp">
                <li class="ul-dp">Butt Down</li>
                <li class="ul-dp">Core Tight</li>
                <li class="ul-dp">Straight Line</li>
                <li class="ul-dp">Breathe Slow</li>
              </ul>
            </div>
          </button>
        </div>
      </div>

      <div class="key-buttons-dp">
        <Link to="/workoutlists">
          <button class="begin-button-dp">back</button>
        </Link>
        <Link to="/livepage">
          <button class="begin-button-dp">start</button>
        </Link>
      </div>
    </div>
  );
}
