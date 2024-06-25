import React from 'react'
import { useState,useEffect } from 'react'

const FetchingApi = () => {
    const[data,setData]=useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(json => setData(json))
},[])
  return (
    <div>
      {data.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default FetchingApi;
