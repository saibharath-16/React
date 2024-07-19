import React from 'react'
import "./Lecture.css"
const Lecture = () => {
  return (
    <>
    <div className="lecture">
      <div className="lecture1">
        <img src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_18.jpg" alt="lec1" className='lecpicture' />
        <div className="lecContent">
            <h4>The complete 2024 Web Development Bootcamp</h4>
            <p>Dr.Angela Yu, Developer and lead...</p>
            <h4>4.7/5</h4>
            <h3>$30.87</h3>
        </div>
      </div>
      <div className="lecture2">
        <img src="https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg" alt="lecc2" className='lecpicture'/>
        <div className="lecContent">
            <h4>The Web Development Bootcamp 2024</h4>
            <p>Colt Steele</p>
            <h4>4.6/5</h4>
            <h3>$28.87</h3>
        </div>
      </div>

      <div className="lecture3">
      <img src="https://img-b.udemycdn.com/course/480x270/965528_737d_7.jpg" alt="lecc2" className='lecpicture'/>
        <div className="lecContent">
            <h4>The Web Development Bootcamp 2024</h4>
            <p>Colt Steele</p>
            <h4>4.6/5</h4>
            <h3>$28.87</h3>
        </div> 
      </div>
      <div className="lecture4">
      <img src="https://img-b.udemycdn.com/course/480x270/1415652_ad99_4.jpg" alt="lecc2" className='lecpicture'/>
        <div className="lecContent">
            <h4>The Web Development Bootcamp 2024</h4>
            <p>Colt Steele</p>
            <h4>4.6/5</h4>
            <h3>$28.87</h3>
        </div> 
      </div>
      </div>
    </>
  )
}

export default Lecture
