import axios from "axios";
import React, { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';

const MotivationComponent = (parentScore, scoreArray) => {
    let [insultText, setInsultText] = useState(null);
    let [count, setCount] = useState(0);
    const [secondsRemaining, setSecondsRemaining] = useState(30000)
    const navigate = useNavigate();
    const handleClick = () => navigate('/endpage');
    const getInsultOrComp = (theScore) => {
        axios.post("http://localhost:5001/ai-response", theScore)
          .then((response) => {
            const result = response.data;
            setInsultText(result);
        });
    }

    useEffect(() => {
        const timerID = setInterval(() => setSecondsRemaining(prevSecondsRemaining => prevSecondsRemaining - 1000), 1000)
        return () => clearInterval(timerID)
    }) 

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
            Timer: <Countdown date={Date.now() + secondsRemaining} onComplete={() => {onFinish()}} />
            <button onClick={() => {
                getInsultOrComp(parentScore)}}>
                Get Insult
            </button>
        </>
    );
}

export default MotivationComponent;