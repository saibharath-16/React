import {useRef} from 'react'

const TaskUncontrolled = () => {
    const inputRef=useRef('');
    const submit=e=>{
        e.preventDefault();
        alert(inputRef.current.value)
    }
  return (
    <div>
      <form onSubmit={submit}>
       <input type="text" ref={inputRef}/>
       <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default TaskUncontrolled
