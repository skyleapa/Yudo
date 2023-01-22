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
      <div class="header-lp">
        Live
        {/* <span class="dot">Live</span> */}

        </div>
{/* 
          <div className="LivePage">
            <TensorFlowComponent />

            <div class="modified-container-lp">
              <button class="modified-button-lp">
                <div class="title-description-dp">
                  Score: 95%
                </div>
              </button>
            </div>
          </div> 
        </div>
        */}


      <div class="middle-lp">
        <div>
          <div className="LivePage">
            <TensorFlowComponent />
          </div>
        </div>
        
        <div class="modified-container-lp">
          <button class="modified-button-lp">
            <div class="title-description-dp">
              Score: 95%
            </div>
          </button>
        </div>
      </div>

      <div className="icons">
        <img class="head-lp" src={head} />
        <img class="speakerphone-lp" src={speakerphone} />

        <div class="primary-button-container-lp">
          <button class="primary-button-lp">
            <div class="primary-button-div-lp">"Keep Your Hips Up More!"</div>
          </button>
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
