import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeBtn = () => {
    const Navigate=useNavigate();
    const goHome=()=>{
        Navigate("/");
    }
    const back=()=>{
        Navigate(-1)
    }
  return (
    <div>
      <button onClick={goHome}>
        Home
      </button>
      <button onClick={back}>
        Back
      </button>
    </div>
  )
}

export default HomeBtn
