import { Component } from "react";

class ClsComponent extends React.Component {
  state={
    name:"sai",
  }
  render(){
    return(
        <div>
            <h1>this.state.name</h1>
            <br/>
            <button onClick={()=>this.setState({name:"Sai bharath"})}>Change Name</button>
        </div>
    )
  }
}

export default ClsComponent;
