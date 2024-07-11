import React, { useCallback, useState } from 'react'
import TestSample from './TestSample';

const CallBackPrac1 = () => {
    let[count,setCount]=useState(0);

let newFn=useCallback(()=>{},[])    
  return (
    <div>
      <TestSample newFn={newFn} /> 
      <h1>I am in Parent component </h1>  
      <h2>{count}</h2>
      <button onClick={()=>setCount(prev=>prev+5)}>Click Here</button>
    </div>
  )
}

export default CallBackPrac1
