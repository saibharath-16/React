import React, { useRef } from 'react'
import "./Quiz.css"
import { data } from './assets/Data'
import { useState } from 'react'
import { useEffect } from 'react'
const TaskQuiz = () => {
    
    let[index,setIndex]=useState(0);
    let[question,setQuestion]=useState(data[index]);
    let[lock,setLock]=useState(false);
    let[score,setScore]=useState(0);
    let[result,setResult]=useState(false);
    let[timePassed, setTimePassed] = useState(0);

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
            setScore(prev=>prev+1);
        }else
        {e.target.classList.add("wrong");}setLock(true);
        option_array[question.ans-1].current.classList.add("correct")
        
    }
    }
    const next=()=>{
        if(lock===true){
          if(index===data.length-1){
            setResult(true)
            return 0;
          }
          setIndex(++index);
          setQuestion(data[index]);
          setLock(false);
          option_array.map((option)=>{
            option.current.classList.remove("wrong");
            option.current.classList.remove("correct");
            return null;
          })
        }
    }
    const reset=()=>{
      setIndex(0);
      setQuestion(data[0]);
      setScore(0);
      setLock(false);
      setResult(false);
      setTimePassed(null);
    }
        useEffect(() => {
      const timer = setInterval(() => {
        setTimePassed((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  return (
    <div className='container'>
      <h1>Quizz App</h1>
      <h4>{timePassed}</h4>
      <hr /> 
      {result?<></>:
      <><h2>{index+1}.{question.quetion}</h2>
      <ul>
        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">
        {index+1} of {data.length} questions
      </div></>}
      {result?<> <h2>YOu Scored {score} out of {data.length}</h2>
       <button onClick={reset}>Reset</button></>:<></>}
    </div>
  )
}

export default TaskQuiz
