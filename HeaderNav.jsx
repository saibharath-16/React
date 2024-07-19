import React from 'react'
import { useState } from 'react'
import "./HeaderNav.css"

const images=[
    "https://img-b.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg",
    "https://img-b.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
]

const HeaderNav = () => {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
      }
    
      function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
      }
  return (<>
    <div className='headerUdemy'>
      <img src="https://logospng.org/download/udemy/udemy-4096.png" alt="Logo" className='logo' />
      <button className='categories'>Categories</button>
      <input type="text" placeholder='Search for anything' className='searchBar'/>  
      <button className='plans'>Plans & Pricing</button>
      <button className='udemyBusiness'>Udemy Business</button>
      <button className='teachonUdemy'>Teach on Udemy</button>
      <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="cart icon" className='cartIcon' />
      <button className='login'>Login</button>
      <button className='signIn'>Sign up</button>
    </div>

    <div className="slider">
        {images.map(
          (image, index) =>
            current === index && (
              
              <div  key={image} className='pic'>
                <button onClick={prevSlide} className='btn'><img src="https://www.svgrepo.com/show/87499/left-arrow.svg" alt="left" className='arr' /></button>
                <img src={image} alt="images" className='sliderPics'/>
                <button onClick={nextSlide} className='btn'><img src="https://www.svgrepo.com/show/495004/arrow-circle-right.svg" alt="right" className='arr'/></button>
              </div>
            )
        )}        
      </div>
      <div className="topics">
        <ul>
        <li>Web Development</li>
        <li>IT Certifications</li>
        <li>Leadership</li>
        <li>Data Science</li>
        <li>Communications</li>
        <li>Business Analytics & Intelligence</li>
        </ul>
      </div>

    </>
  )
}

export default HeaderNav
