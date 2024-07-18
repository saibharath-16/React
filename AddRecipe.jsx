import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeDet from './RecipeDet';
import "./AddReci.css"

const AddRecipe = () => {
  let [ingrediant,setIngrediant]=useState([]);
  let [recipe,setRecipe]=useState("")

  let recipeList
  let handleClick=(e)=>{
    e.preventDefault()
    setRecipe(e.target.value)
    
    recipeList = { 
      recipeDetails:{
        Name:recipe,
        Ingre:[ingrediant.split(' ')]
      }
    }
    console.log(recipeList)
  }


  return (
    <div>
      <p>I am in Add Recipe </p>
      <ul>
        <Link to={"/"}style={{margin:"5px"}}>Home</Link>
        <Link to={"/recipe_details"}style={{margin:"5px"}}>Recipe Details</Link>
      </ul>

      <div className="textBox">
        <input type="text" placeholder='Recipe Name' value={recipe} onChange={(e)=>{setRecipe(e.target.value)}} />
       <input type="text" placeholder='Add ingrediant' value={ingrediant} onChange={(e)=>{setIngrediant(e.target.value)}}/>
       <button onClick={handleClick}>Add</button> 
      </div>
      <div className='ingrediantsContainer'>

      </div>
      {recipe}
      <div className="hide">
      <RecipeDet data={recipeList} />
      </div>
      
    </div>
  )
}

export default AddRecipe
