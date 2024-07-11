import React, { useMemo, useState } from 'react'

const MemoPrac1 = () => {
    let [number,setNumber]=useState(0);
    let [counter,setCounter]=useState(0);

    const cubeFunc=(num)=>{
        console.log("Calculated Result !!!");
        return(Math.pow(num, 3));
    };

    // let result=cubeFunc(number);
    let result=useMemo(()=>cubeFunc(number),[number])
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>Cube of Num is : {result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
      <h1>Counter Value is :{counter}</h1>
    </div>
  )
}

export default MemoPrac1;



