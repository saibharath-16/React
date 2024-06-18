
// import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import MyFunc from "./components/MyFunc";
import Navbar from "./components/Navbar";
import StateMang from "./components/StateMang";
import Theme from "./components/Theme";
import Toggle from "./components/Toggle";
import { Routes,Route } from "react-router-dom";
import HomeBtn from "./components/HomeBtn";
import Error from "./components/Error";


function App(){
  return(
    
    <div className="holder">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeBtn/>}/>
        <Route path="/toggle" element={ <Toggle />} />
        <Route path="/theme" element={ <Theme />}/>
        <Route path="/myfunc" element={<MyFunc />}/>
        <Route path="/statemang" element={<StateMang />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="*" element={<Error />}/>
       </Routes><br/>
       <HomeBtn />
    </div>
   
  )
}

export default App;
