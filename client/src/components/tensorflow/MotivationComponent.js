import axios from "axios";
import React, { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import './config';
import speakerphone from './../ui/images/speakerphone.png';
import head from './../ui/images/head.png';
import './../ui/LivePage.css';

const MotivationComponent = (parentScore) => {
    let [insultText, setInsultText] = useState("");
    const navigate = useNavigate();
    const handleClick = () => navigate('/endpage');
    const getInsultOrComp = (theScore) => {
        axios.post("http://localhost:5001/ai-response", theScore)
          .then((response) => {
            const result = response.data;
            setInsultText(result);
        })
    }

    useEffect(() => {
        global.config.insult = "Test" + insultText;
        console.log(insultText)
    }, [insultText])

    function onFinish() {
        let sum = 0;
        let average = 0;
        // let finalArray = JSON.stringify(parentScore).scoreArray;

        // if (finalArray.length !== 0) {
        //     for (let i = 0; i < finalArray.length; i++) {
        //         sum += finalArray[i]
        //     }
        //     average = (sum / finalArray.length).toFixed(2);
        // }

        // global.config.score = parentScore;
        getInsultOrComp(parentScore);
        
        console.log("Average is " + average)

    }
    
    return (
        <>
            <div className="icons">
                <img class="head-lp" src={head} />
                <img class="speakerphone-lp" src={speakerphone} />

                <div class="primary-button-container-lp">
                <button class="primary-button-lp">
                    <div class="primary-button-div-lp">CHAT-GPT3: {insultText}</div>
                </button>
                </div>
                <button class="" onClick={() => {
                onFinish()}}>
                Get Results
                </button>
            </div>
            
        </>
    );
}

export default MotivationComponent;