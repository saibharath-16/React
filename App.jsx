import React from 'react'
import "./App.css"
import {Route,Routes} from "react-router-dom"
import AddRecipe from './AddRecipe'
import RecipeDet from './RecipeDet'
// import WeatherCh from './WeatherCh'
// import RvProps from './RvProps'
import HomePage from './HomePage'

const App = () => {
  const car={ 
    brand:"Kia",
    model:"2022",
    color:"Red"
  }  
  return (
    <div>
      {/* <WeatherCh /> */}
      {/* <RvProps brand={car}/> */}
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/add_recipe" element={<AddRecipe/>} />
          <Route path="/recipe_details" element={<RecipeDet/>} />
          </Routes>
      
    </div>
  )
}

export default App
