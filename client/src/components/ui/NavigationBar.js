import React from "react";
import head from "./images/head.png"; // with import
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div id="navigationBar">
      <img src={head} />
      <h1>
        <Link to="/">Yudo </Link>
      </h1>
      <div class="options">
        <a className="exercises">
          <Link to="/exercises"> Exercises</Link>
        </a>
        <a className="workout">
          <Link to="/workouts"> Workout</Link>
        </a>
        <a className="about">About</a>
      </div>
    </div>
  );
}
