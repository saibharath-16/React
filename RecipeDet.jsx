import React from 'react'
import { Link } from 'react-router-dom'
import "./ReciDet.css"

const RecipeDet = (props) => {
  return (
    <div>
      <p>i am in Recipe Det </p>
      <ul>
      <Link to={"/"}style={{margin:"5px"}}>Home</Link>
      <Link to={"/add_recipe"}style={{margin:"5px"}}>Add Recipe</Link>
      </ul>
      {
        <li>{props.data}</li>
      }
    </div>
  )
}

export default RecipeDet
