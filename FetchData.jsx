import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/7',{
      method:"DELETE"
    })
    //limit-it shows limited fields 
    //sort=desc -it shows the fields in descending order
    //POST-it is used to add new item 
    //PUT-it is used to update item
    //Patch-used to update single field
    //DELETE -it is used to delete complete id
    .then(res=>res.json())
    .then(json=>console.log(json))
      
    })
  
  return (<> </>)  
}

export default FetchData;
