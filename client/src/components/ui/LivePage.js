import React from "react";
import TensorFlowComponent from "../tensorflow/TensorFlowComponent";
import MotivationComponent from "../tensorflow/MotivationComponent";
import "./LivePage.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import speakerphone from "./images/speakerphone.png";
import head from "./images/head.png";

export default function LivePage() {
  return (
    <div>
      <div>
        <div>
          <div className="LivePage">
            <TensorFlowComponent />
          </div>
        </div>

      <div class="key-buttons-dp">
        <Link to="/demopage">
          <button class="begin-button-dp">demo</button>
        </Link>
        <Link to="/endpage">
          <button class="begin-button-dp">end</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
