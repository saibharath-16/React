import React, { useState, useRef } from 'react';
import "./styling.css"

const Stopwatch = () => {
    const [time, setTime] = useState(null);
    const[now,setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current= setInterval(()=>{
        setTime(Date.now());
        },10 )
    };

    const handlePause = () => {
        clearInterval(intervalRef.current); 

    };

    const handleReset = () => {
        clearInterval(intervalRef.current); 
        setTime(now);
    };
   
    const timePassed=(time-now)/1000;

    return (
        <div className="stopwatch">
            <div className="time">
                <h2>Stop Watch:{timePassed}</h2></div>
            <div className="buttons">
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
