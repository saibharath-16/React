import React from 'react'
import TaskProp2 from './TaskProp2'

const TaskProp1 = (props) => {
  return (
    <div>
        <h3>child 1</h3>
     <TaskProp2 data={props.data}/>
    </div>
  )
}

export default TaskProp1
