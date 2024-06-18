
// import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import MyFunc from "./components/MyFunc";
import Navbar from "./components/Navbar";
import StateMang from "./components/StateMang";
import Theme from "./components/Theme";
import Toggle from "./components/Toggle";

function App(){
  return(
    <div className="holder">
       <Navbar />
       <MyFunc name="Sai Bharath"/>
       <StateMang />
       <Counter /><br /> 
       {/* <ColorBox /> */}
       <Toggle /><br /> <br /> 
       <FetchData />
       <Theme />
    </div>
   
  )
}

export default App;