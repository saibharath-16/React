import React from 'react'
import { varName } from './App'
import { useContext } from 'react';
// import 

const Component2 = () => {
    const data = useContext(varName)
    return (
        <>
            {/* <div>
      Im in component 2
    </div> */}
            {data}
        </>
    )
}

export default Component2
