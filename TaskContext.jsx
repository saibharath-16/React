import React from 'react'
import TaskContext1 from './TaskContext1'

const TaskContext = () => {
   
  return (
    <div>
        <div>Im in Child 1</div>
      <TaskContext1/>
    </div>
  )
}

export default TaskContext
