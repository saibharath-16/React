
// import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import MyFunc from "./components/MyFunc";
import Navbar from "./components/Navbar";
import StateMang from "./components/StateMang";
import Theme from "./components/Theme";
import Toggle from "./components/Toggle";
import { Routes,Route } from "react-router-dom";
import HomeBtn from "./components/HomeBtn";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Clock from "./components/Clock";
import ImgSlide from "./components/ImgSlide";


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
        <Route path="/profile" element={Profile}/>
       </Routes><br/>
       <HomeBtn /><br/><br/>
       <Clock />
       <ImgSlide />
    </div>
   
  )
}

export default App;


