import React from 'react'
import TaskProp1 from './TaskProp1'

const TaskProp = (props) => {
  return (
    <div>
      <p>Parent 1</p>
      <TaskProp1 data={props.data}/>

    </div>
  )
}

export default TaskProp
