import axios from "axios";
import React, { useState, useRef, useEffect } from 'react';
import UseInterval from './UseInterval';

const MotivationComponent = () => {
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
            Current motivation: {insultText}
            Timer: {count}
            <button onClick={() => {
                getInsultOrComp(0.5)}}>
                Get Insult
            </button>
        </>
    );
}

export default MotivationComponent;