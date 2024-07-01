import React,{useState} from 'react'
import data from "./data.json"

const SearchFilter = () => {
    const [search,setSearch]=useState('');

  return (
    <><center>
      <h2>Search City</h2>
      <input type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
        {data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=>{
            return <div style={
                {
                    "border":"1px solid black"
                    ,"padding":"10px",
                    "margin":"10px",
                    "maxWidth":"70%"
                }
            }>
                {city.name}
            </div>
        })}   
        </center> 
    </>  
  )
}

export default SearchFilter
