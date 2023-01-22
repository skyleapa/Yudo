import axios from "axios";
import React, { useState, useRef, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import './config';

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

    const hours = 0;
    const minutes = 0;
    const seconds = 60;
    const [[hrs, mins, secs], setTime] = React.useState([0, 0, 30]);

    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0) {
            reset()
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
    };


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    // useEffect(() => {
    //     const timerID = setInterval(() => setSecondsRemaining(prevSecondsRemaining => prevSecondsRemaining - 1000), 1000)
    //     return () => clearInterval(timerID)
    // }) 

    function onFinish() {
        let sum = 0;
        for (let i = 0; i < scoreArray.length; i++) {
            sum += scoreArray[i]
        }
        const average = (sum / scoreArray.length).toFixed(2);
        
        global.config.score = 3000;
        global.config.insult = getInsultOrComp(average);
    }
    
    return (
        <>
            <p>Current motivation: {insultText} </p>
            {/* Timer: <Countdown date={Date.now() + secondsRemaining} onComplete={() => {onFinish()}} /> */}
            <div>
                <p>{`${hrs.toString().padStart(2, '0')}:${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
            </div>
            <button onClick={() => {
                onFinish()}}>
                Get Insult
            </button>
        </>
    );
}

export default MotivationComponent;