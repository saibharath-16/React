import React, { useState } from 'react'
import CounterE1 from './CounterE1';
import CounterE2 from './CounterE2';

const CounterE = () => {
    const[counter1,setCounter1]=useState(0);
    const[counter2,setCounter2]=useState(0);

    const increaseCounter1=()=>{
        setCounter1(counter1+1);
    }
    const increaseCounter2=()=>{
        setCounter2(counter2+1);
    }
  return (
    <div>
      <CounterE1 value={counter2} onClick={increaseCounter1}/>
      <CounterE2 value={counter2} onClick={increaseCounter2}/>
    </div>
  )
}

export default CounterE
