import TaskHoc from "./TaskHoc"
const TaskCount = (props) => {
    // const[num,setNum]=useState(0);

    // const increase=()=>{
    //     setNum(num+1);
    // }
    // const decrease=()=>{
    //     setNum(num-1);
    // }
    const {count,incrementCount}=props;
  return (
    <div>
        <div><p>{count}</p></div>
      {count<=0? (
        <div>
          <button onClick={incrementCount}>increase</button>
        </div>
      ) : (
        <div>
            <button onClick={incrementCount}>increase</button>
            {/* <button onClick={decrementCount}>Decrease</button> */}
        </div>)}
    </div>
  )
}

export default TaskHoc(TaskCount,5 )
