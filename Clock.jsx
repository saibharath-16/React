import React from 'react'
import { useState,useEffect } from 'react'

const Clock = () => {
    const[time,setTime]=useState(new Date());
    useEffect(() => {
        const seconds = () => {
          setTime(new Date());
        };
    
        const intervalId = setInterval(seconds, 1000);

        return () => {
          clearInterval(intervalId);
        };
      }, []);
    
  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
