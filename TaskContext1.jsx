import React from 'react'
import { useContext } from 'react';
import { messages } from './App';

const TaskContext1 = () => {
    const val = useContext(messages)
  return (
    <div>
        <h2>Im in last child</h2>
      {val}
      <h5>You can notice the content in child 1 has not appeared...
        we can directly send data from parent to last node of child</h5>
    </div>
  )
}

export default TaskContext1
