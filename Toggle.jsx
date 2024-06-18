// Creating a component that toggles the visibility of a text when a button is clicked.

import { useState } from "react"


const Toggle = () => {

    const[Content,setContent]=useState(false);

    const Visibility =()=>{
        setContent(preState=>!preState);
    }
  return (
    <div>
      
      <button onClick={Visibility} >
      {Content ? 'Hide' : 'Show'} Text
      </button>
      {Content && <p>I am Sai Bharath</p>}
    </div>
  );
}

export default Toggle
