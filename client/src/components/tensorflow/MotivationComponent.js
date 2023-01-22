import axios from "axios";
import React, { useState, useRef } from 'react';

const MotivationComponent = () => {

    let [insultText, setInsultText] = useState(null);

    const getInsultOrComp = (theScore) => {
        let scorePercentage = theScore * 100;

        axios.post("http://localhost:5001/ai-response", scorePercentage)
          .then((response) => {
            const result = response.data;
            setInsultText(result);
        });
    }

    return (
        <>
            Current motivation: {insultText}
            <button onClick={getInsultOrComp(0.5)}>
                Get Insult
            </button>
        </>
    );
}

export default MotivationComponent;