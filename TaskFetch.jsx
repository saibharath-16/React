import React from 'react'
import { useState,useEffect } from 'react'

const TaskFetch = () => {
    const[data,setData]=useState([])
useEffect(()=>{
    fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(json => setData(json));
},[])

  return (
    <div>
      {data.map(item => <li key={item.id}>{item.name}</li>)}
    </div>
  )
}

export default TaskFetch;
