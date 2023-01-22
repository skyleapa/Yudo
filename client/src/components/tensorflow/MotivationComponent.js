import axios from "axios";
import React, { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';

const MotivationComponent = (parentScore, scoreArray) => {
    let [insultText, setInsultText] = useState(null);
    let [count, setCount] = useState(0);
    
    const getInsultOrComp = (theScore) => {
        axios.post("http://localhost:5001/ai-response", theScore)
          .then((response) => {
            const result = response.data;
            setInsultText(result);
        });
    }

    function onFinish() {
        let sum = 0;
        for (let i = 0; i < scoreArray.length; i++) {
            sum += scoreArray[i]
        }
        const average = (sum / scoreArray.length).toFixed(2);
        getInsultOrComp(average)
    }
    
    return (
        <>
            <p>Current motivation: {insultText} </p>
            Timer: <Countdown date={Date.now() + 30000} onComplete={() => {onFinish()}} />
            <button onClick={() => {
                getInsultOrComp(parentScore)}}>
                Get Insult
            </button>
        </>
    );
}

export default MotivationComponent;