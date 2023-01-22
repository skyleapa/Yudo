import React from "react";
import "./Workouts.css";

export default function Workouts() {
  function panelButton() {
    alert("test");
  }

  return (
    <div>
      <h1>Workouts</h1>
      <div>
        <button onClick={panelButton}>
          Full Body - 45 minutes, 9 exercises
        </button>
      </div>
    </div>
  );
}
