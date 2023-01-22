import React from "react";
import TensorFlowComponent from "../tensorflow/TensorFlowComponent";
import MotivationComponent from "../tensorflow/MotivationComponent";
import "./LivePage.css";
import { Link } from "react-router-dom";

export default function LivePage() {
  return (
    <div>
      <>
        <TensorFlowComponent />
      </>
      <div>
        <div class="key-buttons-lp">
          <Link to="/demopage">
            <button class="begin-button-lp">back</button>
          </Link>
          <Link to="/endpage">
            <button class="begin-button-lp">next</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
