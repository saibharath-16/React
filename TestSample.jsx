import React from 'react'

const TestSample = () => {
    console.log("Rendered in child component");
  return (
    <div>
      <h1>I am in Child component </h1>
    </div>
  )
}

export default React.memo( TestSample);
