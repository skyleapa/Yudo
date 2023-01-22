import axios from "axios";
import React, { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';

const MotivationComponent = (parentScore) => {
    let [insultText, setInsultText] = useState(null);
    let [count, setCount] = useState(0);
    
    const getInsultOrComp = (theScore) => {
        axios.post("http://localhost:5001/ai-response", theScore)
          .then((response) => {
            const result = response.data;
            setInsultText(result);
        });
    }
    
    return (
        <>
            <p>Current motivation: {insultText} </p>
            Timer: <Countdown date={Date.now() + 30000} onComplete={() => {getInsultOrComp(0.5)}} />
            <button onClick={() => {
                getInsultOrComp(parentScore)}}>
                Get Insult
            </button>
        </>
    );
}

export default MotivationComponent;