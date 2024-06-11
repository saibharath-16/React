import React from 'react'
import "./Navbar.css"

const Img=()=>{
  return(
  <div className='Img1'>
        <img className='SamplePic' src="1.jpg" />
      </div>
  )
}

const Menu=()=>{
  return(
    <div className="Menu">
      <p>Im in Drop Down</p>
    </div>
  
)
}

const Navbar//main header
 = () => {
  return (
    
    <div className='NestedHeader'>
      <Img />
      <Menu />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        
    </div>

   
  )
}

export default Navbar

