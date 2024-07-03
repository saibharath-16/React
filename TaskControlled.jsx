import {useState} from 'react'
import Test from './Test';
const TaskControlled = () => {
    const[data , setData]=useState('');
    const change=e=>{
        setData(e.target.value);
    }
  return (
    <div>
        <p>Item : {data}</p>
      <input type="text" onChange={change} placeholder='Your list'/>
      <Test change={change}/>
    </div>
  )
}

export default TaskControlled
