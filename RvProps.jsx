import React from 'react'
import { useState } from 'react'
const RvProps = (props) => {
    const[color,setColor]=useState("Blue")
    let handleClick=()=>{
        setColor("green")
    }
  return (
    <div>
      <button onClick={handleClick} > Green</button>
      <p>i am in {color} color</p>
      <p>I ride {props.brand.brand}</p>
    </div>
  )
}

export default RvProps
