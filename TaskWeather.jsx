import axios from 'axios'
import "./TaskWeather.css"
import React, {  useState } from 'react'

const TaskWeather = () => {
  let [city, setCity] = useState('')
  let [temper, setTemper] = useState('')
  let [weathers,setWeathers]=useState('')


  async function tempers() {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e81d8e7eeb1a227d8aa9be8767cbd35e`)
      .then((res) => {
        console.log(res.data.weather[0].main);
        setTemper(res.data.main.temp)
        setWeathers(res.data.weather[0].main)
      })
  }


  return (
    <div>
      
      <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} />
      <button onClick={tempers}>submit</button>
      <div className='temp' >Temperature: {temper}<br/>
        Weather: {weathers}
      </div>
      <div className='place'> City: {city}</div>

    </div>
  )
}

export default TaskWeather
