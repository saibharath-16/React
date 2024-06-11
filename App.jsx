
import MyFunc from "./components/MyFunc";
import Navbar from "./components/Navbar";
//import Cars from "./components/Cars";

// const myCar={
//   brand : "Tata",
//   model : "Nexon",
//   year :2023
// }
  

function App(){
  return(
    <div className="holder">
       <Navbar />
       <MyFunc name="Sai Bharath"/>
    

    </div>
   
  )
}

export default App;