import React, { useState } from 'react'

const TaskHoc = (OldComp,incrementBy=1) => {
  return  function NewComponent(props){
    const [count,setCount]=useState(0);
    return(
        <OldComp {...props}
        count={count}
        incrementCount={()=>setCount(count+incrementBy)}/>
    )
  }
   
}

export default TaskHoc;
