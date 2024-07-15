import React from 'react'
class ErrorBoundary extends React.Component {
 
    state={
        error:''
    }
  static getDerivedStateFromError(error){
    return{
        error:error
    }
  }
  
  componentDidCatch(error,info){
    console.log("error is : ",error);
    console.log("info is : ",info)
  }
  render(){
    if(this.state.error){
        return(
            <div>
            <h2>Some Error occured...</h2>
            </div>    
        )
    }return (<div>
        {this.props.children}
        
        </div>)    
  }
}

export default ErrorBoundary
