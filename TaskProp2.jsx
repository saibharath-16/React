import React from 'react'

const TaskProp2 = (props) => {
  return (
    <div>
      <h4>Last Child</h4>

      <p>id: {props.data.id}</p>
      <p>message: {props.data.message}</p>
      <h2>Here we can see we have sent message from app.jsx and recieved that message in last child using props</h2>
    </div>
  )
}

export default TaskProp2
