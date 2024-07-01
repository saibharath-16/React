import { useState } from "react"

const TaskCount = () => {
    const[num,setNum]=useState(0);

    const increase=()=>{
        setNum(num+1);
    }
    const decrease=()=>{
        setNum(num-1);
    }
  return (
    <div>
        <div><p>{num}</p></div>
      {num<=0? (
        <div>
          <button onClick={increase}>increase</button>
        </div>
      ) : (
        <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>)}
    </div>
  )
}

export default TaskCount
