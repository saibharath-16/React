import React, { useRef } from 'react'
import "./Quiz.css"
import { data } from './assets/Data'
import { useState } from 'react'
const TaskQuiz = () => {
    
    let[index,setIndex]=useState(0);
    let[question,setQuestion]=useState(data[index]);
    let[lock,setLock]=useState(false);
    
    
    let option1=useRef(null);
    let option2=useRef(null);
    let option3=useRef(null);
    let option4=useRef(null);

    let option_array= [option1,option2,option3,option4]
    const checkAns=(e,ans)=>{
        if(lock===false){
        if(question.ans === ans){
            e.target.classList.add("correct");
            setLock(true)
        }else
        {e.target.classList.add("wrong");}setLock(true)
        
    }
    }
  return (
    <div className='container'>
      <h1>Quizz App</h1>
      <hr /> 
      <h2>{index+1}.{question.quetion}</h2>
      <ul>
        <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">
        1 of 5 questions
      </div>
    </div>
  )
}

export default TaskQuiz
